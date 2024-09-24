// reverse the string  
// input = "Hello" Output like this  olleH

function reversString(str){
    if(str===""){
        return "";
    }
   else 
   {return reversString(str.substr(1))+str.charAt(0)}

}
console.log(reversString('ello'))

let names = "KUN"
let convertInArray = names.split("")
  let removeAlpa = convertInArray.pop();  // remove the first char in the array 
  convertInArray.push(removeAlpa) // add the  char  in the last
  let result = convertInArray.join('') // join the string
  console.log(result);