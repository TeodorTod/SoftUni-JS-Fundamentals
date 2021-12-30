function equalSums(arr) {
    let leftSum = 0;
    let rightSum = 0;
    let arrL = arr.length;
    let isEqual = false;

    for (let i = 1; i < arrL; i++) {
        let currN = arr[i - 1];
        leftSum += currN;
        for (let j = 1 + i; j < arrL; j++) {
            let insideNum = arr[j];
            rightSum += insideNum;
            
        }
        if (leftSum === rightSum) {
            isEqual = true;
            console.log(`${i}`);
            break;
        } else {
            if (i === 1) {
                leftSum = arr[0];
            } 
            rightSum = 0;
        }

    }
    if (arrL === 1) {
        console.log(0);
    } else if (isEqual === false) {
        console.log("no");
    }
    
}
equalSums([1, 2]);