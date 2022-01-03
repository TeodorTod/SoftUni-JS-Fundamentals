function solve(arr) {
    let days = Number(arr.shift());
    let dailyPlunder = Number(arr.shift());
    let expetdedPlunder = Number(arr.shift());
    let collect = 0;

    for (let i = 1; i <= days; i++) {
        collect += dailyPlunder;
        if (i % 3 === 0) {
            collect += dailyPlunder * 0.5;
        } 
        if (i % 5 === 0) {
            collect *= 0.7;
        }
        
        
    }
    if (collect >= expetdedPlunder) {
        console.log(`Ahoy! ${collect.toFixed(2)} plunder gained.`);
    } else {
        console.log(`Collected only ${((collect / expetdedPlunder) * 100).toFixed(2)}% of the plunder.`);
    }
}
solve((["5",
"40",
"100"])
);
solve((["10",
"20",
"380"])
);