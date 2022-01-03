function solve(input) {
    let sequence = input.shift().split(" ");
    input.pop();
    let moves = 0;
    let inputL = input.length;
    for (let i = 0; i < inputL; i++) {
        if (sequence.length === 0) {
            break;
        }
        moves++;
        let [firstEl, secondEl] = input[i].split(" ");
        if (firstEl === secondEl || firstEl < 0 || secondEl < 0 ||
            firstEl > input.length || secondEl > input.length) {
            let addNum = `-${moves}a`;
            console.log("Invalid input! Adding additional elements to the board");
            sequence.splice(sequence.length / 2, 0, addNum);
            sequence.splice(sequence.length / 2, 0, addNum);
        } else if (sequence[Number(firstEl)] !== sequence[Number(secondEl)]) {
            console.log("Try again!");
        } else {
            console.log(`Congrats! You have found matching elements - ${sequence[firstEl]}!`);
            sequence.splice(Number(firstEl), 1);
            sequence.splice((Number(secondEl)), 1);
            
        }
    }
    if (sequence.length <= 0) {
        console.log(`You have won in ${moves} turns!`);
    } else {
        console.log("Sorry you lose :(");
        console.log(sequence.join(" "));
    }
}
solve([
    "1 1 2 2 3 3 4 4 5 5", 
    "1 0",
    "-1 0",
    "1 0", 
    "1 0", 
    "1 0", 
    "end"
    ]
    
    
    );