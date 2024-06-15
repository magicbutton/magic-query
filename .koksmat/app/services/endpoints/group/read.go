/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.read.v2
package group

import (
    "log"
    "strconv"
    "github.com/magicbutton/magic-people/applogic"
    "github.com/magicbutton/magic-people/database"
    "github.com/magicbutton/magic-people/services/models/groupmodel"

)

func GroupRead(arg0 string) (*groupmodel.Group, error) {
    id,_ := strconv.Atoi(arg0)
    log.Println("Calling Groupread")

    return applogic.Read[database.Group, groupmodel.Group](id, applogic.MapGroupOutgoing)

}
