/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.read.v2
package user

import (
    "log"
    "strconv"
    "github.com/magicbutton/magic-people/applogic"
    "github.com/magicbutton/magic-people/database"
    "github.com/magicbutton/magic-people/services/models/usermodel"

)

func UserRead(arg0 string) (*usermodel.User, error) {
    id,_ := strconv.Atoi(arg0)
    log.Println("Calling Userread")

    return applogic.Read[database.User, usermodel.User](id, applogic.MapUserOutgoing)

}
