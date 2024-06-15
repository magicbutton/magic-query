/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   
//GenerateGoModel v1
package relationmodel
import (
	"encoding/json"
	"time"
    // "github.com/magicbutton/magic-people/database/databasetypes"
)

func UnmarshalRelation(data []byte) (Relation, error) {
	var r Relation
	err := json.Unmarshal(data, &r)
	return r, err
}

func (r *Relation) Marshal() ([]byte, error) {
	return json.Marshal(r)
}

type Relation struct {
    ID        int    `json:"id"`
    CreatedAt time.Time `json:"created_at"`
    CreatedBy string `json:"created_by"`
    UpdatedAt time.Time `json:"updated_at"`
    UpdatedBy string `json:"updated_by"`
        Name string `json:"name"`
    Description string `json:"description"`
    Relation_id int `json:"relation_id"`
    Relationtype string `json:"relationtype"`

}

