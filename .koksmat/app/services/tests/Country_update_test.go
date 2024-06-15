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
        "github.com/magicbutton/magic-people/services/endpoints/country"
                    "github.com/magicbutton/magic-people/services/models/countrymodel"
        "github.com/stretchr/testify/assert"
    )
    
    func TestCountryupdate(t *testing.T) {
                                // transformer v1
            object := countrymodel.Country{}
         
            result,err := country.CountryUpdate(object)
            if err != nil {
                t.Errorf("Error %s", err)
            }
            assert.NotNil(t, result)
        
    
    }
    
