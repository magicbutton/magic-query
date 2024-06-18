package handlers

import (
	"net/http"
)

func GenericHandler(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
	w.Write([]byte("This is a generic handler"))
}
