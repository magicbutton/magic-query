/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   
//GenerateGoModel v1
package personmodel
import (
	"encoding/json"
	"time"
    // "github.com/magicbutton/magic-people/database/databasetypes"
)

func UnmarshalPerson(data []byte) (Person, error) {
	var r Person
	err := json.Unmarshal(data, &r)
	return r, err
}

func (r *Person) Marshal() ([]byte, error) {
	return json.Marshal(r)
}

type Person struct {
    ID        int    `json:"id"`
    CreatedAt time.Time `json:"created_at"`
    CreatedBy string `json:"created_by"`
    UpdatedAt time.Time `json:"updated_at"`
    UpdatedBy string `json:"updated_by"`
        Name string `json:"name"`
    Description string `json:"description"`
    Email string `json:"email"`
    Displayname string `json:"displayname"`
    Firstname string `json:"firstname"`
    Lastname string `json:"lastname"`
    Uniqueid string `json:"uniqueid"`
    Nationality_id int `json:"nationality_id"`

}

