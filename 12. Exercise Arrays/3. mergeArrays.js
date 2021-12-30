function mergeArrays(arr1, arr2) {
    let arrLength = arr1.length;
    let finalArr = [];
    for (let i = 0; i < arrLength; i++) {
        let curr1 = arr1[i];
        let curr2 = arr2[i];
        if (i % 2 === 0) {
            let sum = Number(curr1) + Number(curr2);
            finalArr.push(sum);
        } else {
            finalArr.push(curr1 + curr2);
        }
    }
    console.log(finalArr.join(" - "));
}
mergeArrays(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44']

);