/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.update.v2
package group

import (
    "log"

    "github.com/magicbutton/magic-people/applogic"
    "github.com/magicbutton/magic-people/database"
    "github.com/magicbutton/magic-people/services/models/groupmodel"

)

func GroupUpdate(item groupmodel.Group) (*groupmodel.Group, error) {
    log.Println("Calling Groupupdate")

    return applogic.Update[database.Group, groupmodel.Group](item.ID,item, applogic.MapGroupIncoming, applogic.MapGroupOutgoing)

}
