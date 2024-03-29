// const codeing =["js","java", "python"];
// const value =codeing.forEach((item)=>{ // for each never return value in variaable 
// console.log(item);
// })
// console.log(value);

const myNum=[1,2,3,4,5,6,7,8,9];
const newNum = myNum.filter((num)=> num>4)
// console.log(newNum);
 const newNumber =[]
 myNum.forEach( // how to return value in  with for each  loop
    (num)=>{
        if (num >0){
            newNumber.push(num)
        }
    }
 )
//  console.log(newNumber);

///  /////////////////map///////////////////////


// let newvalues = myNum.map((num)=>num+10)


//chaning in  method 

// let newvalues = myNum.map((num)=>num*10)
// .map((num)=>num+1)
// .filter((num)=>num>=4)

// console.log(newvalues);
///////////////////////////reduce ///////////////////////

// let totalvalue =myNum.reduce(function(acc, currval){
//     console.log(`acc:${acc} currval: ${currval}`);
//     return acc+currval
// },0)
// console.log(totalvalue);

const shoppingCart= [
    {
        productname: "apple mobile",
        price: 5,
        qty: 1

    },
    {
        productname: "sumsung mobile",
        price: 5,
        qty: 2

    },
    {
        productname: "nokia mobile",
        price: 1,
        qty: 1


    }
] 

const priceToPay = shoppingCart.reduce((acc, item)=>acc+item.price*item.qty,0);
console.log(priceToPay);
