/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.search.v2
package group

import (
    "log"

    "github.com/magicbutton/magic-people/applogic"
    "github.com/magicbutton/magic-people/database"
    "github.com/magicbutton/magic-people/services/models/groupmodel"
    . "github.com/magicbutton/magic-people/utils"
)

func GroupSearch(query string) (*Page[groupmodel.Group], error) {
    log.Println("Calling Groupsearch")

    return applogic.Search[database.Group, groupmodel.Group]("searchindex", query, applogic.MapGroupOutgoing)

}
