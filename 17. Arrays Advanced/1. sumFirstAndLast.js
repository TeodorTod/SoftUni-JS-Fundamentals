function firstAndLast(arr) {
    let first = Number(arr.shift());
    let last = Number(arr.pop());
    console.log(first + last);
}
firstAndLast(['20', '30', '40']);