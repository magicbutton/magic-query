package util

import (
	"fmt"
	"log"
)

func Log(level, subject string, args ...interface{}) {
	log.Printf("[%s] %s: %v", level, subject, fmt.Sprint(args...))
}
