function rotateArray(arr) {
    let arrL = arr.length;
    let counter = arr[arrL - 1];
    arr.pop();
    for (let i = 0; i < counter; i++) {
        let curr = arr.pop();
        
        arr.unshift(curr);
       
    }
    console.log(arr.join(" "));
}
rotateArray(['1', '2', '3', '4', '2']);