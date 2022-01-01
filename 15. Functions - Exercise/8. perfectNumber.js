function pNum(num) {
    let sum = 0;
    let final = () => {
        for (let i = 1; i < num; i++) {
            let curr = i;
            if (num % curr === 0) {
                sum += curr;
            }
        }
        return sum;
    };

    if (final() === num) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}
pNum(27);