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
	"github.com/magicbutton/magic-people/services/models/companymodel"
   
)


func MapCompanyOutgoing(db database.Company) companymodel.Company {
    return companymodel.Company{
        ID:        db.ID,
        CreatedAt: db.CreatedAt,
        CreatedBy: db.CreatedBy,
        UpdatedAt: db.UpdatedAt,
        UpdatedBy: db.UpdatedBy,
                Name : db.Name,
        Description : db.Description,
        Vatnumber : db.Vatnumber,
        Phonenumber : db.Phonenumber,
        Address : db.Address,
        City : db.City,
        Postalcode : db.Postalcode,
                Country_id : db.Country_id,

    }
}

func MapCompanyIncoming(in companymodel.Company) database.Company {
    return database.Company{
        ID:        in.ID,
        CreatedAt: in.CreatedAt,
        CreatedBy: in.CreatedBy,
        UpdatedAt: in.UpdatedAt,
        UpdatedBy: in.UpdatedBy,
                Name : in.Name,
        Description : in.Description,
        Vatnumber : in.Vatnumber,
        Phonenumber : in.Phonenumber,
        Address : in.Address,
        City : in.City,
        Postalcode : in.Postalcode,
                Country_id : in.Country_id,
        Searchindex : in.Name,

    }
}
