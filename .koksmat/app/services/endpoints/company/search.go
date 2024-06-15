/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.search.v2
package company

import (
    "log"

    "github.com/magicbutton/magic-people/applogic"
    "github.com/magicbutton/magic-people/database"
    "github.com/magicbutton/magic-people/services/models/companymodel"
    . "github.com/magicbutton/magic-people/utils"
)

func CompanySearch(query string) (*Page[companymodel.Company], error) {
    log.Println("Calling Companysearch")

    return applogic.Search[database.Company, companymodel.Company]("searchindex", query, applogic.MapCompanyOutgoing)

}
