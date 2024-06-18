package middleware

import (
	"context"
	"log"
	"net/http"
	"strings"

	"github.com/dgrijalva/jwt-go"
	"github.com/magicbutton/magic-api/internal/services"
	"github.com/spf13/viper"
)

func AuthMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		authHeader := r.Header.Get("Authorization")
		if authHeader == "" {
			log.Println("AuthMiddleware: Authorization header missing")
			http.Error(w, "Authorization header missing", http.StatusUnauthorized)
			return
		}

		tokenString := strings.TrimPrefix(authHeader, "Bearer ")
		token, claims, err := validateJWT(tokenString)
		if err != nil || !token.Valid {
			log.Println("AuthMiddleware: Invalid token")
			http.Error(w, "Invalid token", http.StatusUnauthorized)
			return
		}

		ctx := context.WithValue(r.Context(), "claims", claims)
		next.ServeHTTP(w, r.WithContext(ctx))
	})
}

func validateJWT(tokenString string) (*jwt.Token, *services.Claims, error) {
	claims := &services.Claims{}
	token, err := jwt.ParseWithClaims(tokenString, claims, func(token *jwt.Token) (interface{}, error) {
		secret := viper.GetString("JWT_SECRET")
		secretKey := []byte(viper.GetString(secret))
		return secretKey, nil
	})
	return token, claims, err
}
