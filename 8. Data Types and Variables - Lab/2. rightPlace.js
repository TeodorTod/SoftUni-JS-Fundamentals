function rightPlace(str1, char, str2) {
    
    for (let i = 0; i < str1.length; i++) {
        let letterStr1 = str1[0 + i];
        let letterStr2 = str2[0 + i];
        if (letterStr1 === "_") {
            if (char === letterStr2) {
                console.log("Matched");
                break;
            } else {
                console.log("Not Matched");
                break;
            }
        }
    }
}
rightPlace('Str_ng', 'I', 'StrIng');