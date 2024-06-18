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


type Zone struct {
    ID        int    `json:"id"`
    CreatedAt time.Time `json:"created_at"`
    CreatedBy string `json:"created_by"`
    UpdatedAt time.Time `json:"updated_at"`
    UpdatedBy string `json:"updated_by"`
        Name string `json:"name"`
    Description string `json:"description"`
    Unique_Zone_Id string `json:"unique_zone_id"`
    Zonetype_id int `json:"zonetype_id"`
    Primaryowner_id int `json:"primaryowner_id"`
    Secondaryowner_id int `json:"secondaryowner_id"`
    Accountable_id int `json:"accountable_id"`

}

