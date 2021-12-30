function nonDecreasingSubsequence(arr) {
    let arrL = arr.length;
    let biggestNum = 0;
    let finalArr = [];

    for (let i = 0; i < arrL; i++) {
        let curr = arr[i];
        if (curr > biggestNum) {
            finalArr.push(curr);
            biggestNum = curr;
        }
        
    }
    console.log(finalArr.join(" "));

}
nonDecreasingSubsequence([ 1, 2, 3, 4]);