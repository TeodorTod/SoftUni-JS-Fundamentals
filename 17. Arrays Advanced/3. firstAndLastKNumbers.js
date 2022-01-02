function firstAndLastNum(arr) {
    
    let firstArr = arr.slice(1, arr[0] + 1);
    let secondArr = arr.slice(-(arr[0]));
    console.log(firstArr.join(" "));
    console.log(secondArr.join(" "));
    
    
    
}

firstAndLastNum([2, 
    7, 8, 9]
    
    );