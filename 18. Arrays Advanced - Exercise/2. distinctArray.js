function solve(arr) {
    let arrL = arr.length;
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        let curr = arr[i];
        if (res.includes(curr)) {
            continue;
        } else {
            res.push(curr);
        }
    }
    console.log(res.join(" "));
}
solve([7, 8, 9, 7, 2, 3, 4, 1, 2]);