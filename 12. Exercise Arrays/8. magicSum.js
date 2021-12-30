function magicSum(arr, n) {
    let arrL = arr.length;
    for (let i = 0; i < arrL; i++) {
        let firstNum = Number(arr[i]);
       for (let j = i + 1; j < arrL; j++) {
           let secondNum = Number(arr[j]);
           if (firstNum + secondNum === n) {
               console.log(`${firstNum} ${secondNum}`);
               
           }
       }
    }
}
magicSum([1, 2, 3, 4, 5, 6], 6 );