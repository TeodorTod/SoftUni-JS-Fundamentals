function sum(input) {
    
    for (let i = 0; i < input.length; i++) {
        let reversed = input[i].toString().split("").reverse();
        let original = input[i].toString().split("");

        const equals = (original, reversed) => JSON.stringify(original) === JSON.stringify(reversed);
        if (equals(original, reversed) === true) {
            console.log("true");
        } else {
            console.log("false");
        }
    }
        
}
sum([123,323,421,121]);