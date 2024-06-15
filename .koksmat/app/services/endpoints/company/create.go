/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.create.v2
package company

import (
    "log"
   
    "github.com/magicbutton/magic-people/applogic"
    "github.com/magicbutton/magic-people/database"
    "github.com/magicbutton/magic-people/services/models/companymodel"

)

func CompanyCreate(item companymodel.Company) (*companymodel.Company, error) {
    log.Println("Calling Companycreate")

    return applogic.Create[database.Company, companymodel.Company](item, applogic.MapCompanyIncoming, applogic.MapCompanyOutgoing)

}
