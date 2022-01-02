function solve(arr) {
    let newArr = arr.sort((a, b) => a - b).slice(0, 2).join(" ");
    console.log(newArr);
}
solve([30, 15, 50, 5]);