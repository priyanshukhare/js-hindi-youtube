const accountId = 144553
let accountEmail = "priyanshu@google.com"
var accountPassword = "123456"
accountCity = "Ujjain"
let accountState

//accountId = 32 // not allowed

accountEmail = "pk@ok.com"
accountPassword = "2212212"
accountCity = "Bengaluru"


console.log(accountId);

/*
Prefer not  to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])