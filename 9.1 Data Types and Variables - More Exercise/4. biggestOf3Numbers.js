function biggestOf3Numbers(n1, n2, n3) {
    if (n1 > n2 && n1 > n3) {
        console.log(n1);
    } else if (n2 > n1 && n2 > n3) {
        console.log(n2);
    } else {
        console.log(n3);
    }
}
biggestOf3Numbers(-2,
    7,
    3
    );