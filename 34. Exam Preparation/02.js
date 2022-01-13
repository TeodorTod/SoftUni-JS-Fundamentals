function solve(input) {
    input.shift();
    let regExp = /(^@#{1,})(?<word>[A-Z][A-Za-z0-9]{4,}[A-Z])(@#{1,})/g;
    let barcodeArr = [];

    for (let el of input) {
        if (!el.match(regExp)) {
            console.log("Invalid barcode");
        } else {
            el = el.split("");
            let digitsStr = "";
            for (let digit of el) {
               if (digit.charCodeAt() >= 48 && digit.charCodeAt() <= 57) {
                   digitsStr += digit;
               }
            }
            if (digitsStr.length < 1) {
                console.log("Product group: 00");
            } else {
                console.log(`Product group: ${digitsStr}`);
            }
        }
    }
    
   
}
solve((["6",
"@###Val1d1teM@###",
"@#ValidIt0M@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"])
);