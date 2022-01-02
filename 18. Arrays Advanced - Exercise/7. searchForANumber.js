function search(arr1, arr2) {
    let addEl = arr2[0];
    let delEl = arr2[1];
    let searchEl = arr2[2];
    let newArr = [];
    let howMany = 0;
    

    for (let i = 0; i < addEl; i++) {
        newArr.push(arr1[i]);
    }
    for (let j = 0; j < delEl; j++) {
        newArr.shift();   
    }
    for (let k = 0; k < newArr.length; k++) {
        let curr = newArr[k];
        if (curr === searchEl) {
            howMany += 1;
        }
        
    }
    console.log(`Number ${searchEl} occurs ${howMany} times.`);
}
search([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    );