/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: true
---
*/
package magicapp

import (
	"github.com/magicbutton/magic-people/services"
	"github.com/nats-io/nats.go/micro"
)

func RegisterServiceEndpoints(root micro.Group) {
	root.AddEndpoint("app", micro.HandlerFunc(services.HandleAppRequests))
	root.AddEndpoint("user", micro.HandlerFunc(services.HandleUserRequests))
	root.AddEndpoint("group", micro.HandlerFunc(services.HandleGroupRequests))
	root.AddEndpoint("country", micro.HandlerFunc(services.HandleCountryRequests))
	root.AddEndpoint("company", micro.HandlerFunc(services.HandleCompanyRequests))
	root.AddEndpoint("person", micro.HandlerFunc(services.HandlePersonRequests))
	root.AddEndpoint("relation", micro.HandlerFunc(services.HandleRelationRequests))
	root.AddEndpoint("system", micro.HandlerFunc(services.HandleSystemRequests))
}
