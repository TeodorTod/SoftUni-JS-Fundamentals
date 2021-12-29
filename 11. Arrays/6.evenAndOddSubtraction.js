function evenAndOddSubtraction(arr) {
    let diff = 0;
    for (let i of arr) {
        i = Number(i);
        if (i % 2 === 0) {
            diff += i;
        } else {
            diff -= i;
        }
    }
    console.log(diff);
}
evenAndOddSubtraction([3,5,7,9]);