function maxSequenceOfEqualElements(arr) {
 
    let arrLength = arr.length;
    let print = "";
    let elementsCount = 0;
    let result = "";
    let min = 1;
    for (let i = 0; i < arrLength; i++) {
 
        let element = arr[i];
        let secondElement = arr[i + 1];
        let previousElement = arr[i - 1];
        if (element === secondElement || element === previousElement) {
            elementsCount++;
            if(element === secondElement && element === previousElement){
                elementsCount++;
            }
            if (elementsCount > min) {
                min = elementsCount;
                print += ` ${element}`.repeat(elementsCount);
                result = print;
                elementsCount = 0;
                print = "";
            }
        }
    }
    console.log(result);
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);