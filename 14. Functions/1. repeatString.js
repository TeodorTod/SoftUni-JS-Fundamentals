function repeatString(str, num) {
    let finalStr = "";
    for (let i = 0; i < num; i++) {
        finalStr += str;
    }
    console.log(finalStr);
}
repeatString("abc",
    3
    );