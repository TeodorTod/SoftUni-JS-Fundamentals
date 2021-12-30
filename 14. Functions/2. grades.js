function grades(n) {
    if (n < 3) {
        console.log("Fail (2)");
    } else if (n < 3.5) {
        console.log(`Poor (${n.toFixed(2)})`);
    } else if (n < 4.5) {
        console.log(`Good (${n.toFixed(2)})`);
    } else if (n < 5.5) {
        console.log(`Very good (${n.toFixed(2)})`);
    } else {
        console.log(`Excellent (${n.toFixed(2)})`);
    }
}
grades(4.5);