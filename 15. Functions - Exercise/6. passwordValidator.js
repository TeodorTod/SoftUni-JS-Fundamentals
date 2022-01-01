function passValid(password) {
 
 
    let rigthLength = isLongEnough(password);
    let onlyNumsAndChars = isOnlyFromCharsAndDigits(password);
    let twoNums = has2Digits(password);
 
    if (!rigthLength) {
        console.log("Password must be between 6 and 10 characters");
    }
    if (!onlyNumsAndChars) {
        console.log("Password must consist only of letters and digits");
    }
    if (!twoNums) {
        console.log("Password must have at least 2 digits");
    }
 
    if (rigthLength && onlyNumsAndChars && twoNums) {
        console.log('Password is valid');
    }
 
 
 
    function isLongEnough(pass) {
        if (pass.length >= 6 && pass.length <= 10) {
            return true;
        } else {
            return false;
        }
    }
 
    function isOnlyFromCharsAndDigits(pass) {
        let passcode = pass.split('');
        let isGTG = true;
        for (let i = 0; i < passcode.length; i++) {
 
            let current = passcode[i];
            let charValue = current.charCodeAt();
            if ((charValue >= 48 && charValue <= 57) ||
                (charValue >= 65 && charValue <= 90) ||
                (charValue >= 97 && charValue <= 122)) {
                continue;
            } else {
                isGTG = false;
            }
        }
        if (isGTG) {
            return true;
        } else {
            return false;
        }
    }
 
    function has2Digits(pass) {
        let passcode = pass.split('');
        let digitsNum = 0;
        for (let i = 0; i < passcode.length; i++) {
            let current = passcode[i];
            let charValue = current.charCodeAt();
            if (charValue >= 48 && charValue <= 57) {
                digitsNum++;
            } else {
                continue;
            }
        }
        if (digitsNum >= 2) {
            return true;
        } else {
            return false;
        }
    }
 
}
password();