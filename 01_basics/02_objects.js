const tinderuser =new Object() //this is singleton object 
// const tinderuser ={}// not singleton object
// console.log(tinderuser)
tinderuser.email= "gma@fma.com",
tinderuser.name ="swat",
tinderuser.id=232
//  console.log(tinderuser)
const obj1 ={1:"a",2:"b",3:"c"};
const obj2 ={4:"d",5:"e",6:"f"};
// const obj3 ={obj1 ,obj2};

//const obj3  = Object.assign({},obj1,obj2)//with the help of merge 2 object in single object
const obj3 ={...obj1,...obj2} 
// console.log(obj3);  

// console.log(Object.keys(tinderuser))// find the keys 
// console.log(Object.values(tinderuser)); //find the values

// console.log(Object.entries(tinderuser)) //convert into every key value in array
// console.log(tinderuser.hasOwnProperty("email")) // find the key  in object 

const course ={
    courseInstructor: "ram",
    price: 200,
    courseName: "javascript"
}

const {courseInstructor : instructor}=course;  // object destructure 
console.log(instructor);