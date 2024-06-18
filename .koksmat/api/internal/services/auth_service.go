package services

import (
	"errors"
	"time"

	"github.com/magicbutton/magic-api/pkg/core"
)

type Token struct {
	UPN            string   `json:"upn"`
	Roles          []string `json:"roles"`
	UniqueName     string   `json:"unique_name"`
	AppDisplayName string   `json:"app_displayname"`
}

func ValidateAndGenerateToken(msalToken string) (string, error) {
	// Assume msalToken is validated and parsed here
	claims, err := core.ValidateMSALToken(msalToken)
	if err != nil {
		return "", errors.New("ValidateAndGenerateToken: invalid MSAL token")
	}

	// Mock data
	upn := claims["upn"].(string)
	//roles := claims["roles"].([]string)
	unique_name := claims["unique_name"].(string)
	app_displayname := claims["app_displayname"].(string)
	token := Token{UPN: upn, Roles: nil, UniqueName: unique_name, AppDisplayName: app_displayname}

	tokenStr, err := GenerateJWT(token, time.Hour)
	if err != nil {
		return "", err
	}

	return tokenStr, nil
}
