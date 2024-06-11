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

const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(() => {
        erro =false
        if(!erro){
            resolve({usename: 'swatantra',password:"123432"})
        }
        else{
            reject({erro:'somthing went worng'})
        }
    }, 1000);
}).then((user)=>{
    return user.usename
})
.then((usename)=>{
    console.log(usename)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("promise time reject or resolved");
})

const promiseFive= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        erro =false
        if(!erro){
            resolve({usename: 'swatantra',password:"123432"})
        }
        else{
            reject({erro:'somthing went worng'})
        }  
    },1000)
})
async function responseFive(){
    try{
        const response = await  promiseFive
        console.log(response)
    }
catch(erro){
    console.log(erro);
}
  
}
responseFive()

async function fatchAPi(){
   try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data);
   } catch (error) {
    console.log("E:",error);
   }


}
// fatchAPi()

     const response = fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
       return response.json()

    })
    .then((res)=>{
        console.log(res);
    }).catch((erro)=>{
        console.log(erro);
    })
