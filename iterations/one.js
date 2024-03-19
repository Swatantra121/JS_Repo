// for loop
for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        // console.log("5 par is best number");
    }
    // console.log(element);
    
}
    for(i=1; i<=10; i++){
        //console.log(`ourter loop ${i}`)

        for(j=1; j<=10; j++){
            // console.log(`inner loop ${j} outer loop${i}`);
           // console.log(`${i} * ${j}=${j*i}`)

        }
    }

    let myArray =["superman","shaktiman","flash"];
        for (let index = 0; index < myArray.length; index++) {
            const element = myArray[index];
            // console.log(element)
            
        }
        // break and continue

        for (let index = 1; index <=20; index++) {
            if (index ==5) {
                console.log("value 5");
                continue
            }
           console.log(index);
            
        }
        for (let index = 1; index <=20; index++) {
            if (index ==5) {
                console.log("value 5");
                break
            }
           console.log(index);
            
        }
        