function solve(arr) {
    let numBuiskets = Number(arr.shift());
    let workers = Number(arr.shift());
    let buisketCompete = Number(arr.shift());
    let sum = 0;

    for (let i = 1; i <= 30; i++) {
        sum += workers * numBuiskets;
        if (i % 3 === 0) {
            sum -= Math.ceil(workers * numBuiskets * 0.25);
        }
        
    }
    console.log(`You have produced ${sum} biscuits for the past month.`);
    let diff = Math.abs(sum - buisketCompete);
    if(sum > buisketCompete) {
        console.log(`You produce ${(diff / buisketCompete * 100).toFixed(2)} percent more biscuits.`);
    } else {
        console.log(`You produce ${(diff / buisketCompete * 100).toFixed(2)} percent less biscuits.`);
    }
}
solve((["78",
"8",
"16000"])
);
solve((["65",
"12",
"26000"])
);
solve((["163",
"16",
"67020"])
);