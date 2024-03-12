const accountId =144553;
let accountEmail ="swatr@gmail.com";
var accountPassword ="123432";
let accountState;

/*
prefer to don't use var 
becouse of issue in block scope and functional scope 
*/
console.log(accountId);
console.table([accountEmail, accountPassword,accountId], accountState)
 