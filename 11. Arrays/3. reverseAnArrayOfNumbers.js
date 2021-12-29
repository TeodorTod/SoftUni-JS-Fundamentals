function reverseAnArrayOfNumbers(n, arr) {
    let newArr = [];
    let reversed = [];
    for (let index = 0; index < n; index++) {
        newArr.push(arr[index]);

    }
    for (let j = newArr.length - 1; j >= 0; j--) {
        reversed.push(newArr[j]); 
        
    }
    console.log(reversed.join(" "));
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);