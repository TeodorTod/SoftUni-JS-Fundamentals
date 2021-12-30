function mathPower(num, paw) {
    let finalSum = 1;
    for (let i = 0; i < paw; i++) {
        finalSum *= num;
    }
    console.log(finalSum);
}
mathPower(2, 10);