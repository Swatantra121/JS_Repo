// dates 
let date = new Date();
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toLocaleDateString());
//console.log(typeof date); //date is a object in java script
//let myDate =new Date(2023,0, 23);// month  started with  zero in java script 
// let myDate =new Date(2023,0, 23, 5, 3);
let myDate =new Date("01-14-2024") 
// console.log(myDate.toDateString());
let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myDate.getTime());
console.log(Math.floor(Date.now()/10003)); // Convert in to milisec
   myDate.toLocaleDateString('default',{
    weekda: "long",
   })
   console.log(myDate.toLocaleDateString('default',{
    weekda: "long",
   }))
   

