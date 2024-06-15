/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/
//GenerateMapModel v1.1
package applogic
import (
	//"encoding/json"
	//"time"
	"github.com/magicbutton/magic-people/database"
	"github.com/magicbutton/magic-people/services/models/personmodel"
   
)


func MapPersonOutgoing(db database.Person) personmodel.Person {
    return personmodel.Person{
        ID:        db.ID,
        CreatedAt: db.CreatedAt,
        CreatedBy: db.CreatedBy,
        UpdatedAt: db.UpdatedAt,
        UpdatedBy: db.UpdatedBy,
                Name : db.Name,
        Description : db.Description,
        Email : db.Email,
        Displayname : db.Displayname,
        Firstname : db.Firstname,
        Lastname : db.Lastname,
        Uniqueid : db.Uniqueid,
                Nationality_id : db.Nationality_id,

    }
}

func MapPersonIncoming(in personmodel.Person) database.Person {
    return database.Person{
        ID:        in.ID,
        CreatedAt: in.CreatedAt,
        CreatedBy: in.CreatedBy,
        UpdatedAt: in.UpdatedAt,
        UpdatedBy: in.UpdatedBy,
                Name : in.Name,
        Description : in.Description,
        Email : in.Email,
        Displayname : in.Displayname,
        Firstname : in.Firstname,
        Lastname : in.Lastname,
        Uniqueid : in.Uniqueid,
                Nationality_id : in.Nationality_id,
        Searchindex : "email:" + in.Email  + "displayname:" + in.Displayname  + "uniqueid:" + in.Uniqueid ,

    }
}
