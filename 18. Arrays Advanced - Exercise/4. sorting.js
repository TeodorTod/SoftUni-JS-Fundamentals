function solve(arr) {
    let final = [];
    let newArr = arr.sort((a, b) => {
        return a - b;
    });

    let thirddArr = newArr.slice(0);
    let secondArr = thirddArr.reverse();

    for (let i = 0; i < arr.length / 2; i++) {
        if (i === (arr.length - 1) / 2) {
            final.push(secondArr[i]);
            break;
        }
        final.push(secondArr[i]);
        final.push(newArr[i]);
        
    }
    console.log(final.join(" "));
}
solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);