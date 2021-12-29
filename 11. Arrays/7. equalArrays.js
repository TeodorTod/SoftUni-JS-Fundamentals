function equalArrays(arr1, arr2) {
    let equal = true;
    let sum = 0;
    for (let index = 0; index < arr1.length; index++) {
        let currOne = arr1[index];
        let currTwo = arr2[index];
        let currNum = Number(arr1[index]);
        sum += currNum;
        if (currOne !== currTwo) {
            console.log(`Arrays are not identical. Found difference at ${index} index`);
            equal = false;
            break;
        } 
        
    }
    if (equal === true) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}
equalArrays(['1'], ['10']);