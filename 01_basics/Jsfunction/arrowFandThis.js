const user ={
    username:  "swat",
    price: 999,
    walcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`);
        //  console.log(this); // this useing  for access  to the current context  
    }
  
}
// user.walcomeMessage()
// user.username="sam";
// user.walcomeMessage();
//  function chai(){
//     console.log(this);

//  }
//  console.log(chai())


const chai =()=>{
    let username="swat";
    console.log(username);
    // console.log(this) can't use in  arrow function 
}
// chai();

// const addTwo =(num1, num2)=>{  sytex of arrow funtion  explicity retrunf when we use {} 
//     return num1+num2;


// }
// const addTwo =(num1, num2)=>  num1+num2; //  implicite retrun  withount useing {} and return

// const addTwo =(num1, num2)=>  (num1+num2); // implicite retrun we cant' use () don't use retrun
const addTwo =(num1, num2)=>  ({usename: "swatantra"}) //we can access oject with {}
console.log(addTwo(1,2));



