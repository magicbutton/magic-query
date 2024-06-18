package handlers

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/magicbutton/magic-api/internal/services"
	"github.com/magicbutton/magic-api/pkg/core"
)

type AuthRequest struct {
	App       string `json:"app"`
	AppKey    string `json:"appkey"`
	MSALToken string `json:"msaltoken"`
}

type AuthResponse struct {
	Token string `json:"token"`
}

func Authenticate(w http.ResponseWriter, r *http.Request) {
	var req AuthRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		log.Println("1001: Invalid request", err)
		http.Error(w, "Invalid request", http.StatusBadRequest)
		return
	}

	if !core.ValidateAppKey(req.App, req.AppKey) {
		log.Println("1002: Invalid app or appkey")
		http.Error(w, "Invalid app or appkey", http.StatusUnauthorized)
		return
	}

	token, err := services.ValidateAndGenerateToken(req.MSALToken)
	if err != nil {
		log.Println("1003: Invalid MSAL token")
		http.Error(w, "Invalid MSAL token", http.StatusUnauthorized)
		return
	}

	res := AuthResponse{Token: token}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(res)
}
