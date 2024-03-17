// singleton   
// object literals
//Object.create // this object method create through constructor  this called singleton object

const mySym = Symbol("key1");


const jsUser ={
name : "swat",
"lastname": "thakur", 
[mySym]: "key1", // here we can access the Symbol datatyoe
age: 18,
location: "jaipur",
email: "swat@gmail.com",
isLogedIn: false,
lastLogedIn: ["monday","tuesday"]
}

// console.log(jsUser.name);
// console.log(jsUser["name"]);// this the right mathod to access object key
// console.log(jsUser["lastname"])
// console.log(jsUser[mySym])
// console.log(jsUser)
// jsUser.email= "ram@gmail.com"
// console.log(jsUser);
// Object.freeze(jsUser); 

jsUser.greeting =function()
{
    console.log("hello ")

}
jsUser.greetings =function()// object call in a funtion i
{
    console.log(`hello ${this.name}`)

}
console.log(jsUser.greeting());
console.log(jsUser.greetings());

