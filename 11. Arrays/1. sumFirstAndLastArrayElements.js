function sumFirstAndLastArrayElements(input) {
    let first = Number(input[0]);
    let last = Number(input[input.length - 1]);
    let sum = first + last;
    console.log(sum);
}
sumFirstAndLastArrayElements([20, 30, 40]);