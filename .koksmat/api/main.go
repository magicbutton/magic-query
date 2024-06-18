package main

import (
	"log"
	"net/http"
	"os"
	"strconv"
	"time"

	"github.com/gorilla/mux"
	"github.com/magicbutton/magic-api/config"
	"github.com/magicbutton/magic-api/internal/handlers"
	"github.com/magicbutton/magic-api/internal/middleware"
	"github.com/magicbutton/magic-api/pkg/util"
)

func main() {
	config.LoadConfig()
	middleware.RedisInit()
	port := config.Cfg.Port
	if len(os.Args) > 1 {
		port = os.Args[1]
	}

	r := mux.NewRouter()
	r.Use(middleware.RateLimiter)
	r.Use(middleware.Logger)

	r.HandleFunc("/authenticate", handlers.Authenticate).Methods("POST")
	r.HandleFunc("/health", handlers.HealthCheck)

	api := r.PathPrefix("/v1.0").Subrouter()
	api.Use(middleware.RateLimiter)
	api.Use(middleware.AuthMiddleware)
	api.HandleFunc("/{rest:.*}", handlers.GenericHandler)

	beta := r.PathPrefix("/beta").Subrouter()
	beta.Use(middleware.RateLimiter)
	beta.Use(middleware.AuthMiddleware)
	beta.HandleFunc("/{rest:.*}", handlers.GenericHandler)

	srv := &http.Server{
		Handler:      r,
		Addr:         ":" + port,
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
	}

	for {
		log.Printf("Starting server on port %s\n", port)
		if err := srv.ListenAndServe(); err != nil {
			util.Log("ERROR", "Server Error", err)
			portNum, _ := strconv.Atoi(port)
			portNum++
			port = strconv.Itoa(portNum)
			srv.Addr = ":" + port
			time.Sleep(1 * time.Second)
		}
	}
}
