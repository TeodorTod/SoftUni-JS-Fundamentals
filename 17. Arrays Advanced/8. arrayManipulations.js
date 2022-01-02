function manupulations(arr) {
    let insideArr = arr.shift().split(" ");
    for (let line of arr) {
        let [command, firstArg, secondArg] = line.split(" ");
        
        if (command === "Add") {
            insideArr.push(firstArg);
        } else if (command === "Remove") {
            let index = insideArr.indexOf(firstArg);
            if (index !== -1) {
                insideArr.splice(index, 1);
            }
        } else if (command === "RemoveAt") {
            let index = Number(firstArg);
            insideArr.splice(index, 1);
        } else if (command === "Insert") {
            let insertedNum = firstArg;
            let index = Number(secondArg);
            insideArr.splice(index, 0, insertedNum);
        }
        
    }
    

    console.log(insideArr.map(Number).join(" "));
}
manupulations(['6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2']

);