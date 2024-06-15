/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.update.v2
package system

import (
    "log"

    "github.com/magicbutton/magic-people/applogic"
    "github.com/magicbutton/magic-people/database"
    "github.com/magicbutton/magic-people/services/models/systemmodel"

)

func SystemUpdate(item systemmodel.System) (*systemmodel.System, error) {
    log.Println("Calling Systemupdate")

    return applogic.Update[database.System, systemmodel.System](item.ID,item, applogic.MapSystemIncoming, applogic.MapSystemOutgoing)

}
