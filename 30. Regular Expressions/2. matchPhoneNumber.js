function solve(text) {
    let regEx = /(?<!\d)[+]359([ -])2\1\d{3}\1\d{4}\b/g;

    let matches = [];
    let validMatch;

    while ((validMatch = regEx.exec(text)) !== null) {
        matches.push(validMatch[0]);
    }

    console.log(matches.join(", "));

}
solve("+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222");