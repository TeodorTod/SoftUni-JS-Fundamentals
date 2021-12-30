function addAndSubtract(arr) {
    let sum = 0;
    let modifiedSum = 0;
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let currNum = arr[i];
        sum += currNum;
        if (currNum % 2 === 0) {
            newArr.push(currNum + i);
        } else {
            newArr.push(currNum - i);
        }

    }
    for (let j = 0; j < newArr.length; j++) {
        let currNum = newArr[j];
        modifiedSum += currNum;
        
    }
    console.log(newArr);
    console.log(sum);
    console.log(modifiedSum);
}
addAndSubtract([-5, 11, 3, 0, 2]);