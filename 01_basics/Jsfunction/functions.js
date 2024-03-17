// function addTwoNumber(num1, num2){
//     console.log(num1 +num2)
// }

// function addTwoNumber(num1, num2){
//     let result = num1+ num2;
//     console.log(result)
//     return result
// }
// addTwoNumber(2,3)


function logInUserMessage(username){
 return `${username} just logged in`
}
console.log(logInUserMessage("swat"))


function cartCalcalution(...numb){// how to declare  rest opretor in function with help of add multiple value in single prameter
    return numb
}
// console.log(cartCalcalution(3,3,1))
  // oject pass in functions
  const object ={
    username: "swat",
    price: 10
  }
  function objectHendle(anyobj){
    console.log(`username is${anyobj.username} and price is ${anyobj.price}`)

  }
//   objectHendle(object);
// pass array in function  

const myNewArray =[1,2,3,4,4];
function  passArray(anyarray){
    return anyarray[3];

}
console.log(passArray(myNewArray));