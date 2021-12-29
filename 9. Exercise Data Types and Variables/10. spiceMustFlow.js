function spiceMustFlow(startingYield) {
    let days = 0;
    let leftYield = 0;

    for (let i = startingYield; i >= 100; i -= 10) {
        days += 1;
        leftYield += (i - 26);
    }

    leftYield -= 26;
    if (leftYield < 0) {
        leftYield = 0;
    }

    console.log(days);
    console.log(leftYield);
}
spiceMustFlow(111);