function solve(arr) {
    let newArr = arr.shift().split("|");
    arr.pop();
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        let theStr = arr[i].split(" ");
        let command = theStr[0];

        if (command === "Loot") {
            for (let j = 1; j < theStr.length; j++) {
                let curr = theStr[j];
                if (!newArr.includes(curr)) {
                    newArr.unshift(curr);
                }
                
            }
        } else if (command === "Drop"){
            let theIndex = Number(theStr[1]);
            if (theIndex >= 0 && theIndex < newArr.length) {
                let moved = (newArr.splice(theIndex, 1)).join(" ");
                newArr.push(moved);
            }

        } else if (command === "Steal") {
            let count = Number(theStr[1]);
            if (count > newArr.length) {
                count = newArr.length;
            }
            let strL = newArr.length - count;
            let cutted = newArr.splice(strL, count);
            console.log(cutted.join(", "));
        }
    }
    if (newArr.length < 1) {
        console.log("Failed treasure hunt.");
    } else {
        for (let k = 0; k < newArr.length; k++) {
            sum += Number((newArr[k]).length);
           
        }
        console.log(`Average treasure gain: ${(sum / newArr.length).toFixed(2)} pirate credits.`);
    }
   
}
solve((["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"])

);