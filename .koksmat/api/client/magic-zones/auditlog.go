/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   
//GenerateGoModel v3.api
package magiczones
import (

	"time"
    // "github.com/magicbutton/magic-zones/database/databasetypes"
)


type AuditLog struct {
    ID        int    `json:"id"`
    CreatedAt time.Time `json:"created_at"`
    CreatedBy string `json:"created_by"`
    UpdatedAt time.Time `json:"updated_at"`
    UpdatedBy string `json:"updated_by"`
        Name string `json:"name"`
    Description string `json:"description"`
    Action string `json:"action"`
    Entity string `json:"entity"`
    Entityid string `json:"entityid"`
    Requesttype string `json:"requesttype"`
    Responsetype string `json:"responsetype"`
    Actor_id int `json:"actor_id"`
    Details interface{} `json:"details"`

}

