function solve(arr) {
    let passangers = arr.shift().split(" ").map(Number);
    let maxNum = Number(arr.shift());
    for (let iterator of arr) {
        let [command, extraPassanger] = iterator.split(" ");
        if (command === "Add") {
            passangers.push(Number(extraPassanger));
        } else {
            for (let i = 0; i < passangers.length; i++) {
                let curr = Number(passangers[i]);
                command = Number(command);
                if (curr + command <= maxNum) {
                    curr += command;
                    passangers.splice(i, 1, curr);
                    break;
                }

            }
        }
    }
return passangers.join(" ");
}
console.log(solve(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
)); 