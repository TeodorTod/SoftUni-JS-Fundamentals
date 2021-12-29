function sumEvenNumbers(arr) {
    let sum = 0;    
    for (let index = 0; index < arr.length; index++) {
        let currNum = Number(arr[index]);
        if (currNum % 2 === 0) {
            sum += currNum;
        }
    } 
    console.log(sum);
}
sumEvenNumbers(['2','4','6','8','10']);