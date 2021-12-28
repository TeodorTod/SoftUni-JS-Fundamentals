function sortNumbers(a, b, c) {
    if (a > b && a > c) {
        console.log(a);
        if (b > c) {
            console.log(b);
            console.log(c);
        } else {
            console.log(c);
            console.log(b);
        }
    }
    if (b > a && b > c) {
        console.log(b);
        if (a > c) {
            console.log(a);
            console.log(c);
        } else {
            console.log(c);
            console.log(a);
        }
    }
    if (c > b && c > a) {
        console.log(c);
        if (a > b) {
            console.log(a);
            console.log(b);
        } else {
            console.log(b);
            console.log(a);
        }
    }
}
sortNumbers(-2, 1, 3);