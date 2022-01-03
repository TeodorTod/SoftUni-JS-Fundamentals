function solve(arr) {
    let initialEnergy = Number(arr.shift());
    let wonBattles = 0;
    let arrL = arr.length;

    for (let i = 0; i < arrL; i++) {
        let currDistance = arr[i];
        if (i % 3 === 0) {
            initialEnergy += i;
        }
        if (currDistance === "End of battle") {
            console.log(`Won battles: ${wonBattles}. Energy left: ${initialEnergy}`);
            break;
        } else {
            if (initialEnergy >= currDistance) {
                initialEnergy -= currDistance;
                wonBattles++;
            } else {
                console.log(`Not enough energy! Game ends with ${wonBattles} won battles and ${initialEnergy} energy`);
                break;
            }
        }
        

    }
}
solve((["100",
"10",
"10",
"10",
"1",
"2",
"3",
"73",
"10"])

);