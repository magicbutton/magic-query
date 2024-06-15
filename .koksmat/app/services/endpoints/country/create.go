/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.create.v2
package country

import (
    "log"
   
    "github.com/magicbutton/magic-people/applogic"
    "github.com/magicbutton/magic-people/database"
    "github.com/magicbutton/magic-people/services/models/countrymodel"

)

func CountryCreate(item countrymodel.Country) (*countrymodel.Country, error) {
    log.Println("Calling Countrycreate")

    return applogic.Create[database.Country, countrymodel.Country](item, applogic.MapCountryIncoming, applogic.MapCountryOutgoing)

}
