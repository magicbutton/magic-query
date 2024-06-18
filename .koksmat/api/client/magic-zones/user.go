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


type User struct {
    ID        int    `json:"id"`
    CreatedAt time.Time `json:"created_at"`
    CreatedBy string `json:"created_by"`
    UpdatedAt time.Time `json:"updated_at"`
    UpdatedBy string `json:"updated_by"`
        Name string `json:"name"`
    Description string `json:"description"`
    Username string `json:"username"`
    Userhomezone_id int `json:"userhomezone_id"`
    Person_id int `json:"person_id"`

}

