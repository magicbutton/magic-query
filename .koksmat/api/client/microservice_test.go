package client

import (
	"log"
	"testing"
)

type Column struct {
	Column int `json:"?column?"`
}

type Result struct {
	Result []Column `json:"Result"`
}

func TestService(t *testing.T) {
	response, err := Request[Result]("magic-mix.app", []string{"select", "select 1"}, "")
	if err != nil {
		t.Errorf("Request() failed: %v", err)
	}
	log.Println("Request() succeeded", response)
	for _, r := range response.Result {
		log.Println("Value", r.Column)
	}
}
