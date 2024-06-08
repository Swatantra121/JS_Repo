// const promisesOne = new Promise(function(resolve,reject)
// {
// setTimeout(()=>{
//  console.log("async task is compelete");
//  resolve()
// },1000)
// }) 
// promisesOne.then(()=>{
//     console.log("promise result");
// })

const promiseTwo = new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log("async taskt completed");
        resolve()
    }, 1000);
}).then(()=>{
    console.log("promise result")
})
const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({userName:"ram",pass:"13121"}) 
    },1000)

}).then((user)=>{
    console.log(user)
})