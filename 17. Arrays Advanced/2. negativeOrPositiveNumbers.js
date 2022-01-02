function negativeOrPositive(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let curr = arr[i];
        if (curr < 0) {
            newArr.unshift(curr);
        } else {
            newArr.push(curr);
        }
        
    }
    for (let i = 0; i < arr.length; i++) {
        console.log(newArr[i]);
        
    }
}
negativeOrPositive(['3', '-2', '0', '-1']);