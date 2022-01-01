function integers(arr) {

    let arrOfNumbers = arr;
    let arrL = arr.length;
    let isPalindrome = (num) => {
        let startNum = num;
        let reversedNum = Number(num.toString().split("").reverse().join(""));
        if (startNum === reversedNum) {
            return "true";
        } else {
            return "false";
        }
    };

    for (let i = 0; i < arrL; i++) {
        let currentNumber = arrOfNumbers[i];
        console.log(isPalindrome(currentNumber));

    }

}
integers([123, 323, 421, 121]);