function solve(input) {
    let first = input.shift();
    let regEx = /![A-Z][a-z]{2,}!:\[[A-Za-z]{8,}\]/g;
    let finalArr = [];
    let finalee = "";

    for (let el of input) {
        if (!el.match(regEx)) {
            console.log("The message is invalid");
        } else {
            finalee = el.split("!")[1];
            el = el.split(":")[1];
            for (let word of el) {
                if ((word.charCodeAt(0) >= 65 && word.charCodeAt(0) <= 90) || (word.charCodeAt(0) >= 97 && word.charCodeAt(0) <= 122)) {
                    finalArr.push(word.charCodeAt(0));
                }
            }
            console.log(`${finalee}: ${finalArr.join(" ")}`);
        }
        
    }
   

}
solve((["3",
"go:[outside]",
"!drive!:YourCarToACarWash",
"!Watch!:[LordofTheRings]"])
);