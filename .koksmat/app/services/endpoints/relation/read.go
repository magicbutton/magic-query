/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.read.v2
package relation

import (
    "log"
    "strconv"
    "github.com/magicbutton/magic-people/applogic"
    "github.com/magicbutton/magic-people/database"
    "github.com/magicbutton/magic-people/services/models/relationmodel"

)

func RelationRead(arg0 string) (*relationmodel.Relation, error) {
    id,_ := strconv.Atoi(arg0)
    log.Println("Calling Relationread")

    return applogic.Read[database.Relation, relationmodel.Relation](id, applogic.MapRelationOutgoing)

}
