const name = "swat";
const repoCount =50;
console.log(name +repoCount);
console.log(`my name is ${name} repo is ${repoCount}`);
  const gameName = new String('helloram')
  console.log(gameName)
  console.log(gameName[0])
  console.log(gameName.charAt(2))
  console.log(gameName.indexOf('e'))
   const newString = gameName.substring(0,4);
   console.log(newString);
   const newString1 =gameName.slice(0,5);
   console.log(newString1);
   const newStringTrim = '    asdas   '
   console.log(newStringTrim.trim());
    const stringReplace = "shyamramer%45";
    console.log(stringReplace.replace('%45','nn'));
    const str = "hello";
    const reversedStr = str.split("").reverse().join("");
    
    console.log(reversedStr); // "olleh"

        const counts = {};
      const sampleArray = ['a', 'a', 'b', 'c'];
      sampleArray.forEach(function (x) {
        counts[x] = (counts[x] || 0) + 1;
                    });
console.log(counts); 

 let Nameof="ramname";
 const newstring= Nameof.split('').reverse('').join('');
 console.log(newstring)
let n= 10 
const number=[0,1];
for(let i=2;i<10;i++){
  number[i]=  number[i-1]+number[i-2];
}
console.log(number)

// // Initialize an array to store the Fibonacci numbers
// const fibonacci = [0, 1];

// // Iterate over the array and calculate the next Fibonacci number
// for (let i = 2; i < 10; i++) {
//   fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
// }

// // Print the Fibonacci series
// console.log(fibonacci);
