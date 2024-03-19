// for of 
let object =[1,2,3,4,5];
for (const iterator of object) {
    // console.log(iterator);
}
greetings = "hello world";
 for (const greet of greetings) {
    //  console.log(`char is ${greet}`);
 }
 // Maps  
// mape is a object hold the key-value pairs  and remembers the original insertion order of the key 
// its give the unique value 
const map1 =new Map();
map1.set('a',1);
map1.set('b',2);
map1.set('c',3);
        // console.log(map1.get('c'));
        // map1.delete('b'); // for delete 
        // console.log(map1.size);// check the size of 
for (const [key,value] of map1) {
    console.log(key,`value is :-${value}`);
    
}

// const obj ={
//     name : "ram",
//     age : 34,
//     classname : "4th" 
// }
// // obj   is not iteratble 
// for (const [key, value] of obj) {
//     // console.log(key ,value);
    
// }


 //for in 
 const object1 ={
    name : "ram",
    age : 34,
    classname : "4th" 
}
 for (const key in object1) {
  console.log(`${key} value : ${object1[key]}`);
 }


