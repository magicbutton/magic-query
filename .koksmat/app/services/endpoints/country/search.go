/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.search.v2
package country

import (
    "log"

    "github.com/magicbutton/magic-people/applogic"
    "github.com/magicbutton/magic-people/database"
    "github.com/magicbutton/magic-people/services/models/countrymodel"
    . "github.com/magicbutton/magic-people/utils"
)

func CountrySearch(query string) (*Page[countrymodel.Country], error) {
    log.Println("Calling Countrysearch")

    return applogic.Search[database.Country, countrymodel.Country]("searchindex", query, applogic.MapCountryOutgoing)

}
