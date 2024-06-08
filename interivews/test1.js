let names = "hello"
console.log(names.split("").reverse("").join(""))
const convertArry = names.split("")

for (i = 0; i < convertArry.length; i++) {
    console.log(convertArry[i]);

}

// function pyramit(height) {
//     debugger
//     let pryamit = ""

//     for (i = 0; i < height; i++) {
//         pryamit += " ".repeat(height - i - 1);
//         pryamit += "*".repeat(2 * i + 1);
//         pryamit += '\n';


//     }
//     console.log(pryamit);

// }
// pyramit(6)


let height =6;
 let tower ="";
 for(let i=0; i<height; i++){
    tower +=' '.repeat(height-i-1);
    tower +="*".repeat(2*i+1);
    tower +='\n';

 }
//  console.log(tower)

function generateFibonacciSeries(count) {
    const fibonacciSeries = [0, 1];
    for (let i = 2; i < count; i++) {
      const nextFibonacci = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
      fibonacciSeries.push(nextFibonacci);
    }
    return fibonacciSeries;
  }
  
  // Example usage:
  const numberOfTerms = 10;
  const fibonacciSeries = generateFibonacciSeries(numberOfTerms);
  console.log(`Fibonacci Series (${numberOfTerms} terms):`, fibonacciSeries);
  

  let count =10;

  const fSerise =[0,1];
  for(let i=2; i<count; i++){
    let newnumber =fSerise[i-1]+fSerise[i-2];
    fSerise.push(newnumber);

  }
//   console.log(fSerise)

// two number swap
var a =10;
var b =15;
// [a,b]=[b,a];
// console.log(`a:${a} b${b}`);
// math way 

b=b+a;
a=b-a;
b=b-a;

console.log(`a:${a} b${b}`);
