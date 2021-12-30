function sCheck(n1, n2, n3) {
    if (n1 >= 0) {
        if (n2 >= 0 && n3 >= 0) {
            console.log("Positive");
        } else if (n2 >= 0 && n3 < 0) {
            console.log("Negative");
        } else if (n2 < 0 && n3 < 0) {
            console.log("Positive");
        } else if (n2 < 0 && n3 >= 0) {
            console.log("Negative");
        }
    } else if (n1 < 0) {
        if (n2 >= 0 && n3 >= 0) {
            console.log("Negative");
        } else if (n2 >= 0 && n3 < 0) {
            console.log("Positive");
        } else if (n2 < 0 && n3 < 0) {
            console.log("Negative");
        } else if (n2 < 0 && n3 >= 0) {
            console.log("Positive");
        }
    } 
}
sCheck(5,
    -12,
    -15
    );