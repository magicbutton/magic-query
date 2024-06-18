package core

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"

	"github.com/golang-jwt/jwt/v5"
	"github.com/square/go-jose/v3"
)

const (
	// Replace with your tenant ID and expected audience (client ID)
	TenantID = "79dc228f-c8f2-4016-8bf0-b990b6c72e98"
	Audience = "00000003-0000-0000-c000-000000000000"
)

var (
	OpenIDConfigURL = fmt.Sprintf("https://login.microsoftonline.com/%s/.well-known/openid-configuration", TenantID)
)

type OpenIDConfig struct {
	JwksURI string `json:"jwks_uri"`
}

func fetchJWKS(jwksURI string) (*jose.JSONWebKeySet, error) {
	resp, err := http.Get(jwksURI)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("failed to fetch JWKS: %s", resp.Status)
	}

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}

	var jwks jose.JSONWebKeySet
	if err := json.Unmarshal(body, &jwks); err != nil {
		return nil, err
	}

	return &jwks, nil
}

func getSigningKey(jwks *jose.JSONWebKeySet, token *jwt.Token) (*jose.JSONWebKey, error) {
	if kid, ok := token.Header["kid"].(string); ok {
		for _, key := range jwks.Keys {
			if key.KeyID == kid {
				return &key, nil
			}
		}
	}
	return nil, fmt.Errorf("unable to find appropriate key")
}

func validateToken(tokenString string) (jwt.MapClaims, error) {
	// Fetch OpenID configuration
	resp, err := http.Get(OpenIDConfigURL)
	if err != nil {
		log.Println("validateToken: 1. failed to fetch OpenID configuration: %v", err)
		return nil, fmt.Errorf("failed to fetch OpenID configuration: %v", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		log.Println("validateToken: 2. failed to fetch OpenID configuration: %s", resp.Status)
		return nil, fmt.Errorf("failed to fetch OpenID configuration: %s", resp.Status)
	}

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}

	var config OpenIDConfig
	if err := json.Unmarshal(body, &config); err != nil {
		return nil, err
	}

	// Fetch JWKS
	jwks, err := fetchJWKS(config.JwksURI)
	if err != nil {
		return nil, err
	}

	// Parse and validate token
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		// Validate the alg is what you expect:
		if _, ok := token.Method.(*jwt.SigningMethodRSA); !ok {
			log.Println("validateToken: 3. unexpected signing method: %v", token.Header["alg"])
			return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
		}

		// Get the key
		key, err := getSigningKey(jwks, token)
		if err != nil {
			return nil, err
		}
		return key.Key, nil
	})

	// if err != nil {
	// 	return fmt.Errorf("token parsing error: %v", err)
	// }

	claims, ok := token.Claims.(jwt.MapClaims)

	if ok { //  && token.Valid {
		// Validate claims
		if claims["aud"] != Audience {
			log.Println("validateToken: 4. invalid audience")
			return nil, fmt.Errorf("invalid audience")
		}

		if claims["iss"] != fmt.Sprintf("https://sts.windows.net/%s/", TenantID) {
			log.Println("validateToken: 5. invalid issuer")
			return nil, fmt.Errorf("invalid issuer")
		}

		return claims, nil
	} else {
		log.Println("validateToken: 6. invalid token")
		return nil, fmt.Errorf("invalid token")
	}
}

func ValidateMSALToken(tokenString string) (jwt.MapClaims, error) {

	return validateToken(tokenString)

}
