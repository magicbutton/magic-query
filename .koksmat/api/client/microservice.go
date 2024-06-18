package client

import (
	"encoding/json"
	"fmt"
	"log"
	"time"

	"github.com/nats-io/nats.go"
	"github.com/nats-io/nats.go/micro"
	"github.com/spf13/viper"
)

type ServiceRequest struct {
	Args          []string `json:"args"`
	Body          string   `json:"body"`
	Channel       string   `json:"channel"`
	Timeout       int      `json:"timeout"`
	TransactionID string   `json:"transactionID"`
	Token         string   `json:"token"`
}

type ServiceResponseModel struct {
	HasError     bool   `json:"hasError"`
	ErrorMessage string `json:"errorMessage"`
	Data         string `json:"data"`
}

type Page[K any] struct {
	TotalPages  int `json:"totalPages"`
	TotalItems  int `json:"totalItems"`
	CurrentPage int `json:"currentPage"`
	Items       []K `json:"items"`
}

func Request[T interface{}](serviceName string, args []string, body string) (*T, error) {
	var nc *nats.Conn
	natsServer := viper.GetString("NATS")
	if natsServer == "" {
		natsServer = "nats://127.0.0.1:4222"
	}
	log.Println("Connecting to", natsServer)
	nc, err := nats.Connect(natsServer)
	if err != nil {
		return nil, err
	}
	defer nc.Close()

	request := &ServiceRequest{
		Args:          args,
		Body:          body,
		Channel:       "x",
		Timeout:       0,
		TransactionID: "y",
		Token:         ""}

	requestData, _ := json.Marshal(request)
	msg, err := nc.Request(serviceName, requestData, 10*time.Second)
	if err != nil {
		return nil, err
	}

	var response ServiceResponseModel
	_ = json.Unmarshal(msg.Data, &response)
	var result T
	if response.HasError {
		return nil, fmt.Errorf(response.ErrorMessage)
	}
	if err := json.Unmarshal([]byte(response.Data), &result); err != nil {
		return nil, err
	}

	return &result, nil

}

func ServiceResponse(req micro.Request, data any) {
	// Marshal the data to JSON
	response, err := json.Marshal(data)
	if err != nil {

		ServiceResponseError(req, "Error marshalling data to JSON")
		return
	}

	req.RespondJSON(ServiceResponseModel{
		HasError:     false,
		ErrorMessage: "",
		Data:         string(response),
	})
}

func ServiceResponseError(req micro.Request, errorMessage string) {
	req.RespondJSON(ServiceResponseModel{
		HasError:     true,
		ErrorMessage: errorMessage,
		Data:         "",
	})
}
func ProcessAppRequest[T interface{}](req micro.Request, process func([]string) (*T, error)) {

	var payload ServiceRequest
	_ = json.Unmarshal([]byte(req.Data()), &payload)
	args := payload.Args[1:]
	result, err := process(args)
	if err != nil {
		log.Println("Error", err)
		ServiceResponseError(req, fmt.Sprintf("%s", err))

		return
	}

	ServiceResponse(req, result)

}
