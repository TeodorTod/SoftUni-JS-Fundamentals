function solve(n1, n2, parameter) {
    let multiply = (n1, n2) => n1 * n2;
    let divide = (n1, n2) => n1 / n2;
    let add = (n1, n2) => n1 + n2;
    let subtract = (n1, n2) => n1 - n2;
    switch (parameter) {
        case "multiply":
            console.log(multiply(n1, n2));
            break;
        case "divide":
            console.log(divide(n1, n2));
            break;
        case "add":
            console.log(add(n1, n2));
            break;
        case "subtract":
            console.log(subtract(n1, n2));
            break;
    }
}
solve(5, 5,'multiply');