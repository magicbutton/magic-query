package config

import (
	"log"

	"github.com/spf13/viper"
)

type Config struct {
	RedisURL string
	Port     string
}

var Cfg *Config

func LoadConfig() {
	viper.SetConfigFile(".env")
	if err := viper.ReadInConfig(); err != nil {
		log.Fatalf("Error reading config file, %s", err)
	}

	Cfg = &Config{
		RedisURL: viper.GetString("REDIS_URL"),
		Port:     viper.GetString("PORT"),
	}
	log.Println("Config loaded", Cfg)
}
