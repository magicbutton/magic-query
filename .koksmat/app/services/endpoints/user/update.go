/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.update.v2
package user

import (
    "log"

    "github.com/magicbutton/magic-people/applogic"
    "github.com/magicbutton/magic-people/database"
    "github.com/magicbutton/magic-people/services/models/usermodel"

)

func UserUpdate(item usermodel.User) (*usermodel.User, error) {
    log.Println("Calling Userupdate")

    return applogic.Update[database.User, usermodel.User](item.ID,item, applogic.MapUserIncoming, applogic.MapUserOutgoing)

}
