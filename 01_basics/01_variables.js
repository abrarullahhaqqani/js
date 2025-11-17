const accountId = 129217
let accountEmail="a.haqqani@bajajauto.co.in"
var accountPassword="12345"
accountCity="Jaipur"
let accountState;
// accountId=2 //not allowed mate
/*
prefer to use let and not var 
because of problem with block and functional scope
*/
accountEmail="a.haqqani@okta.com"
accountPassword="123"
accountCity="Hyderabad"

console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])