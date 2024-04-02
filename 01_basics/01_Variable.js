const accountId = 556611
let accountEmail = "Kamran@gmail.com"
var accountPassword = "12345"

accountCity = "Lahore"

// accountId = 2  // not allowed

accountEmail = "test@email.com"
accountPassword = "54321"
accountCity = "Karachi"

/*
use let keyword for variables
prefer not to use var 
because of issue of block scope and functional scope. 
*/

console.table([accountId,accountEmail,accountPassword,accountCity])