function solve(type, num) {
    let total = 0;
    switch (type) {
        case "coffee":
            total = num * 1.5;
            break;
        case "water":
            total = num * 1;
            break;
        case "coke":
            total = num * 1.4;
            break;
        case "snacks":
            total = num * 2;
            break;
    }
    console.log(total.toFixed(2));
}
solve("water", 5);