    /* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/
    //generator:  noma4.1
    package tests
    import (
        "testing"
        "github.com/magicbutton/magic-people/services/endpoints/relation"
                    "github.com/magicbutton/magic-people/services/models/relationmodel"
        "github.com/stretchr/testify/assert"
    )
    
    func TestRelationcreate(t *testing.T) {
                                // transformer v1
            object := relationmodel.Relation{}
         
            result,err := relation.RelationCreate(object)
            if err != nil {
                t.Errorf("Error %s", err)
            }
            assert.NotNil(t, result)
        
    
    }
    
