function reverseString(str) {
    str = str.toString();
    let newString = "";
    for (let index = 0; index < str.length; index++) {

        newString += str[str.length - index - 1];
    }
    console.log(newString);
}
reverseString("SoftUni");