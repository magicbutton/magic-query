/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.read.v2
package system

import (
    "log"
    "strconv"
    "github.com/magicbutton/magic-people/applogic"
    "github.com/magicbutton/magic-people/database"
    "github.com/magicbutton/magic-people/services/models/systemmodel"

)

func SystemRead(arg0 string) (*systemmodel.System, error) {
    id,_ := strconv.Atoi(arg0)
    log.Println("Calling Systemread")

    return applogic.Read[database.System, systemmodel.System](id, applogic.MapSystemOutgoing)

}
