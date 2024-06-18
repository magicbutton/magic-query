package middleware

import (
	"net/http"

	magiczones "github.com/magicbutton/magic-api/client/magic-zones"
	"github.com/magicbutton/magic-api/pkg/util"
)

func Logger(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		item := &magiczones.AuditLog{
			CreatedBy:    "system",
			UpdatedBy:    "system",
			Name:         "Request",
			Description:  "Request to the API",
			Action:       "Request",
			Entity:       "Request",
			Entityid:     r.URL.Path,
			Requesttype:  r.Method,
			Responsetype: "HTTP",
			//ActorID:     0,
			Details: nil,
		}

		util.Log("INFO", "Request", r.Method, r.URL.Path)
		go util.Log("INFO", "Persisted log", item)
		next.ServeHTTP(w, r)
	})
}
