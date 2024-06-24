/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/
//GenerateGoModel v2
package auditlog

import (
	"encoding/json"
	"time"
	// "github.com/magicbutton/magic-zones/database/databasetypes"
)

func UnmarshalAuditLog(data []byte) (AuditLog, error) {
	var r AuditLog
	err := json.Unmarshal(data, &r)
	return r, err
}

func (r *AuditLog) Marshal() ([]byte, error) {
	return json.Marshal(r)
}

func Create(r *AuditLog) (*AuditLog, error) {
	//services.CallMicroservice()
	return r, nil
}

type AuditLog struct {
	ID           int         `json:"id"`
	CreatedAt    time.Time   `json:"created_at"`
	CreatedBy    string      `json:"created_by"`
	UpdatedAt    time.Time   `json:"updated_at"`
	UpdatedBy    string      `json:"updated_by"`
	Name         string      `json:"name"`
	Description  string      `json:"description"`
	Action       string      `json:"action"`
	Entity       string      `json:"entity"`
	Entityid     string      `json:"entityid"`
	Requesttype  string      `json:"requesttype"`
	Responsetype string      `json:"responsetype"`
	Actor_id     int         `json:"actor_id"`
	Details      interface{} `json:"details"`
}
