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
        "github.com/magicbutton/magic-people/services/endpoints/user"
                    "github.com/magicbutton/magic-people/services/models/usermodel"
        "github.com/stretchr/testify/assert"
    )
    
    func TestUserupdate(t *testing.T) {
                                // transformer v1
            object := usermodel.User{}
         
            result,err := user.UserUpdate(object)
            if err != nil {
                t.Errorf("Error %s", err)
            }
            assert.NotNil(t, result)
        
    
    }
    
