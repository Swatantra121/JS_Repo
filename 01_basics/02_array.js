const  marvel_heros =["spiderman","ironman","thor"];
const dc_heros =["superman","batman","joker"];
// marvel_heros.push(dc_heros); // push add array uder array  this not right way to merge the  2 arrays


//console.log(marvel_heros[3][1])/

const allHeros =marvel_heros.concat(dc_heros); // we can merge 2 array in with use of concat 
// console.log(allHeros);

const allnewHeros = [...marvel_heros, ...dc_heros];// we can use merge mulltilple  arrays with the use of spread array 

//console.log(allHeros);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[6,4]]];
const realAnotherArray= anotherArray.flat(Infinity); // we can use multiple array  under array  merge with all  in single array

// console.log(realAnotherArray);

// console.log(Array.isArray("swat")); //check the array 
// console.log(Array.from("swat"));// convert in to the array
// console.log(Array.from({name: "swat"})) // retrun in empty array 
let   score1 =200;
let score2 =300;
let score3 =400;


console.log(Array.of(score1,score2,score3)); //retrun of array from set of elements



