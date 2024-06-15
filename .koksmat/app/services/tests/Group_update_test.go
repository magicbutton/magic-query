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
        "github.com/magicbutton/magic-people/services/endpoints/group"
                    "github.com/magicbutton/magic-people/services/models/groupmodel"
        "github.com/stretchr/testify/assert"
    )
    
    func TestGroupupdate(t *testing.T) {
                                // transformer v1
            object := groupmodel.Group{}
         
            result,err := group.GroupUpdate(object)
            if err != nil {
                t.Errorf("Error %s", err)
            }
            assert.NotNil(t, result)
        
    
    }
    
