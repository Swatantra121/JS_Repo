// primitive data type 
// 7 catogory  : String , Number , Boolean , null , undefined , symbol, BigInt,
const id =Symbol('123');
const newId =Symbol('123');
console.log( id ==newId);




//Reference (Non primitive )

// Array , Object , Functions 



//************************************************************************ */
// Stack Memory (Primitive)  and Heap Memory (Non-Primitive)

let myyoutubeName ="ramname"
let anotherName = myyoutubeName;
anotherName ="syam name ";
console.log(myyoutubeName)

console.log(anotherName)

let userOne ={
    age : 1,
    name :"ram "
}
let userTwo =userOne
userTwo.age =2
console.log(userOne.age);
console.log(userTwo.age);

