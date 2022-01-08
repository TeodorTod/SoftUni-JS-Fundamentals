function solve(input) {

    let finalCars = {};
    for (let el of input) {
        let [command, car] = el.split(", ");
        if (command === "IN") {
            finalCars[car] = command;
        } else if (command === "OUT") {
            delete finalCars[car];
        }
    }

    let arrayOfKeys = Object.keys(finalCars);
    let sorted = arrayOfKeys.sort((a, b) => {
        return a.localeCompare(b);
    });
    if (arrayOfKeys.length < 1) {
        console.log("Parking Lot is Empty");
    } else {
        sorted.forEach(el => {
            console.log(el);
        });
    }


}
solve(['IN, CA2844AA',
        'IN, CA1234TA',
        'OUT, CA2844AA',
        'IN, CA9999TT',
        'IN, CA2866HI',
        'OUT, CA1234TA',
        'IN, CA2844AA',
        'OUT, CA2866HI',
        'IN, CA9876HH',
        'IN, CA2822UU'
    ]


);