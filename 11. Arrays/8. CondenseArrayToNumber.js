function CondenseArrayToNumber(arr) {
    while (arr.length > 1) {
        let condensed = [];
        for (let i = 0; i < arr.length - 1; i++) {
            let curr = arr[i] + arr[i + 1];
            condensed.push(curr);
        }
        arr = condensed;
    }
    console.log(arr[0]);
    
}
CondenseArrayToNumber([5,0,4,1,2]);