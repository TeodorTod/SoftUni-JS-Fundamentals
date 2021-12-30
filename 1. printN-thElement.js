function printNthElement(arr) {
    let arrL = arr.length;
    let counter = Number(arr[arrL - 1]);
    let final = "";
    for (let i = 0; i < arrL - 1; i += counter) {
        final += arr[i] + " ";
    }
    console.log(final);
}
printNthElement(['5', '20', '31', '4', '20', '2']);