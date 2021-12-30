function commonElements(arr1, arr2) {
    let arr1Length = arr1.length;
    let arr2Length = arr2.length;

    for (let i = 0; i < arr1Length; i++) {
        let curr1 = arr1[i];
        for (let j = 0; j < arr2Length; j++) {
            let curr2 = arr2[j];
            if (curr1 === curr2) {
                console.log(curr1);
                break;
            }
            
        }
        
    }
}
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']

);