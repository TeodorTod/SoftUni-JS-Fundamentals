function solve(arr) {
    let tourists = Number(arr[0]);
    let liftState = arr[1].split(" ").map(Number);
    let finalArr = [];
    
    for (let i = 0; i < liftState.length; i++) {
        let currState = liftState[i];
        if (tourists >= 4) {
            finalArr.push(4);
            tourists -= 4 - currState;
        } else if (tourists >= 0) {
            finalArr.push(tourists);
            tourists -= 4 - currState;
        }
        
        
    }
    
    if (tourists > 0) {
        console.log(`There isn't enough space! ${tourists} people in a queue!`);
        console.log(finalArr.join(" "));
    } else if (tourists === 0) {
        console.log(finalArr.join(" "));
    } else {
        console.log(`The lift has empty spots!`);
        console.log(finalArr.join(" "));
    }
   
}  
solve([
    "16",
    "0 0 0 0 0"
   ]
   
   
   );