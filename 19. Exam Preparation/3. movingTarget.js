function solve(input) {
    let newArr = input.split(" ").map(Number);
    let finalArr = [];
    let average = 0;
    for (let i = 0; i < newArr.length; i++) {
        average += newArr[i];
    }
    for (let k = 0; k < newArr.length; k++) {
        let curr = newArr[k];
        if (curr > average / newArr.length) {
            finalArr.push(curr);
        }   
    }
    finalArr.sort((a, b) => b - a).splice(5, 100000);
    if (finalArr.length === 0) {
        console.log("No");
    } else {
        console.log(finalArr.join(" "));
    }
}
solve("5 2 3 4 -10 30 40 50 20 50 60 60 51");