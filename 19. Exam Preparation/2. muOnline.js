function solve(arr) {
    let sequence = arr.shift().split(" ").map(Number);
    arr.pop();
    let shots = arr.map(Number);
    let targetsCount = 0;

    for (let i = 0; i < shots.length; i++) {
        let currentShot = shots[i];
        let currentTarget = sequence[currentShot];
        if (currentTarget > -1) {
            targetsCount += 1;
            sequence[currentShot] = -1;  
            for (let j = 0; j < sequence.length; j++) {
                if (sequence[j] > - 1) {
                    if (sequence[j] > currentTarget) {
                        sequence[j] -= currentTarget;
                    } else {
                        sequence[j] += currentTarget;
                    }
                }
                
            }
        } 
       
    }
    
    console.log(`Shot targets: ${targetsCount} -> ${sequence.join(" ")}`);
}
solve((["24 50 36 70",
"0",
"4",
"3",
"1",
"End"])
);