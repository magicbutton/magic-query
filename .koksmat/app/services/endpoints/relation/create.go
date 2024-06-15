/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.create.v2
package relation

import (
    "log"
   
    "github.com/magicbutton/magic-people/applogic"
    "github.com/magicbutton/magic-people/database"
    "github.com/magicbutton/magic-people/services/models/relationmodel"

)

func RelationCreate(item relationmodel.Relation) (*relationmodel.Relation, error) {
    log.Println("Calling Relationcreate")

    return applogic.Create[database.Relation, relationmodel.Relation](item, applogic.MapRelationIncoming, applogic.MapRelationOutgoing)

}
