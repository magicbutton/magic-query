package handlers

import (
	"net/http"

	"github.com/gorilla/mux"
)

func GenericHandler(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	method := r.Method
	version := params["version"]
	// if version <> "v1.0" or "beta" return not found
	if version != "v1.0" && version != "beta" {
		w.WriteHeader(http.StatusNotFound)
		w.Write([]byte("Version not found"))
		return
	}

	slug := params["slug"]

	w.WriteHeader(http.StatusOK)
	response := "This is a generic handler for " + slug + " with method " + method + " at version " + version
	w.Write([]byte(response))
}
