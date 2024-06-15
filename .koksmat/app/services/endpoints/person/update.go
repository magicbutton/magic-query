/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.update.v2
package person

import (
    "log"

    "github.com/magicbutton/magic-people/applogic"
    "github.com/magicbutton/magic-people/database"
    "github.com/magicbutton/magic-people/services/models/personmodel"

)

func PersonUpdate(item personmodel.Person) (*personmodel.Person, error) {
    log.Println("Calling Personupdate")

    return applogic.Update[database.Person, personmodel.Person](item.ID,item, applogic.MapPersonIncoming, applogic.MapPersonOutgoing)

}
