function solve(text) {
    let arr = text.split("");
    let flag = true;
    let newArr = [];
    let counter = 0;
    for (let index = 0; index <= arr.length; index++) {
        if (flag === true) {
            index = 0 + counter;
        }
        let first = arr[index];
        let second = arr[index + 1];
        if (first === second) {
            arr.shift();
            flag = true;
        } else {
            newArr.push(first);
            flag = false;
            counter++;
        }
    }
    console.log(newArr.join(""));
}
solve("qqqwerqwecccwd");