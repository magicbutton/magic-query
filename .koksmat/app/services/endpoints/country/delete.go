            /*
            File have been automatically created. To prevent the file from getting overwritten
            set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
            ---
            keep: false
            ---
            */
            //generator:  noma3.delete.v2
            package country
            
            import (
                "log"
                "strconv"
                "github.com/magicbutton/magic-people/applogic"
                "github.com/magicbutton/magic-people/database"
                "github.com/magicbutton/magic-people/services/models/countrymodel"
            
            )
            
            func CountryDelete(arg0 string) ( error) {
                id,_ := strconv.Atoi(arg0)
                log.Println("Calling Countrydelete")
            
                return applogic.Delete[database.Country, countrymodel.Country](id)
            
            }
