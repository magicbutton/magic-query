package services

import (
	"log"
	"time"

	"github.com/dgrijalva/jwt-go"
	"github.com/spf13/viper"
)

//var secretKey = []byte("your-secret-key")

type Claims struct {
	UPN         string   `json:"upn"`
	Roles       []string `json:"roles"`
	DisplayName string   `json:"displayname"`
	AppName     string   `json:"appname"`
	jwt.StandardClaims
}

func GenerateJWT(token Token, duration time.Duration) (string, error) {
	expirationTime := time.Now().Add(duration)
	claims := &Claims{
		UPN:         token.UPN,
		Roles:       token.Roles,
		DisplayName: token.UniqueName,
		AppName:     token.AppDisplayName,
		StandardClaims: jwt.StandardClaims{
			ExpiresAt: expirationTime.Unix(),
		},
	}

	tokenJWT := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	secret := viper.GetString("JWT_SECRET")
	if secret == "" {
		log.Fatal("JWT_SECRET")
	}
	secretKey := []byte(secret)
	tokenString, err := tokenJWT.SignedString(secretKey)
	if err != nil {
		return "", err
	}

	return tokenString, nil
}
