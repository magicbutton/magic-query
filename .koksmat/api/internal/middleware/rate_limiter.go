package middleware

import (
	"net/http"
	"time"

	"github.com/go-redis/redis/v8"
	"github.com/magicbutton/magic-api/config"
)

var client *redis.Client

func RedisInit() {
	client = redis.NewClient(&redis.Options{
		Addr: config.Cfg.RedisURL,
	})
}

func RateLimiter(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		ctx := r.Context()
		ip := r.RemoteAddr
		count, err := client.Get(ctx, ip).Int()
		if err == redis.Nil {
			client.Set(ctx, ip, 1, time.Minute)
			next.ServeHTTP(w, r)
			return
		}

		if count >= 60 {
			http.Error(w, "Rate limit exceeded", http.StatusTooManyRequests)
			return
		}

		client.Incr(ctx, ip)
		next.ServeHTTP(w, r)
	})
}
