package middleware

import (
	"net/http"

	"github.com/magicbutton/magic-api/pkg/util"
)

func Logger(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		util.Log("INFO", "Request", r.Method, r.URL.Path)
		next.ServeHTTP(w, r)
	})
}
