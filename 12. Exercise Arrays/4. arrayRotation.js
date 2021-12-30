function arrayRotation(arr, n) {
    
    
    for (let i = 0; i < n; i++) {
        let curr = arr[i];
        let nToMove = arr.shift();
        arr.push(nToMove);
        

       
    }
    console.log(arr.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2);