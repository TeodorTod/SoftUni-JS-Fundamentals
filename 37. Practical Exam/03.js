function solve(input) {
    let maxMess = Number(input.shift());
    input.pop();
    let finalObj = {};

    for (let line of input) {
        line = line.split("=");
        let command = line[0];

        if (command === "Add") {
            let username = line[1];
            let sent = Number(line[2]);
            let received = Number(line[3]);
            if (!finalObj[username]) {
                finalObj[username] = {
                    ["se"]: sent,
                    ["rec"]: received,
                    ["total"]: maxMess
                };
            }
        } else if (command === "Message") {
            let sender = line[1];
            let receiver = line[2];

            if (finalObj[sender] && finalObj[receiver]) {
                finalObj[sender]["se"] += 1;
                finalObj[receiver]["rec"] += 1;
            }
            if (finalObj[sender]["se"] && finalObj[sender]["rec"]) {

                if (finalObj[sender]["se"] + finalObj[sender]["rec"] >= finalObj[sender]["total"]) {
                    delete finalObj[sender];
                    console.log(`${sender} reached the capacity!`);
                    continue;
                }
                if (finalObj[receiver]["rec"] + finalObj[receiver]["se"] >= finalObj[sender]["total"]) {
                    delete finalObj[receiver];
                    console.log(`${receiver} reached the capacity!`);
                    continue;
                }
            }


        } else if (command === "Empty") {
            let username = line[1];
            if (finalObj[username]) {
                delete finalObj[username];
            } else if (username === "All") {
                finalObj = {};
            }
        }
    }

    let sortedObj = Object.entries(finalObj);
    // sortedObj.sort((a, b) => {
    //     let firstMan = a[0];
    //     let secondMan = b[0];
    //     let sendOne = a[1]["se"] + a[1]["rec"];
    //     let sendTwo = b[1]["se"] + b[1]["rec"];
    //     if (sendOne !== sendTwo) {
    //         return sendTwo
    //     }


    // });

    // let values = sortedObj[1][1];
    // let newOne = Object.values(values);
    // console.log(newOne[1] + newOne[0]);
    let myProg = {};
    for (let el of sortedObj) {
        let values = Object.values(el)[0];
        let values2 = Object.values(el)[1];
        let arrVal = Object.entries(values2);
        let sum = arrVal[0][1] + arrVal[1][1];
        myProg[values] = sum;

    }

    let sortedProgram = Object.entries(myProg);
    sortedProgram.sort((a, b) => {
        let firstName = a[0];
        let secondName = b[0];
        let fisrtSum = a[1];
        let secondSum = b[1];
        if (fisrtSum !== secondSum) {
            return secondSum - fisrtSum;
        } else {
            return firstName.localeCompare(secondName);
        }
    });
    console.log(`Users count: ${sortedProgram.length}`);
    sortedProgram.forEach(person => {
        console.log(`${person[0]} - ${person[1]}`);
    });



}
solve((["10",
        "Message=Berg=Kevin",
        "Add=Mark=5=4",
        "Statistics"
    ])

);
// solve((["12",
// "Add=Bonnie=3=5",
// "Add=Johny=4=4",
// "Empty=All",
// "Add=Bonnie=3=3",
// "Statistics"])
// );