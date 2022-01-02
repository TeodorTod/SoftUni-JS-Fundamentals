function party(arr) {
    let arrL = arr.length;
    let final = [];
    for (let i = 0; i < arrL; i++) {
        let curr = arr[i];
        let [name, willIt, yesOrNot] = curr.split(" ");
        if (yesOrNot === "going!") {
            
        }
    }
    console.log(final);

} 
party(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']
);
party(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
);