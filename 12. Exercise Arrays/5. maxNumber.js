function maxNumber(arr) {
 
    let print = "";
    let arrLength = arr.length;
    let isBigger = true;
    for (let i = 0; i < arrLength; i++) {
        let topInteger = arr[i];
 
        for (let j = i + 1; j < arrLength; j++) {
            if (topInteger <= arr[j]) {
                isBigger = false;
            }
        }
        if (isBigger) {
            print += ` ${topInteger}`;
        }
        isBigger = true;
    }
    console.log(print);
}
maxNumber([14, 24, 3, 19, 15, 17]);