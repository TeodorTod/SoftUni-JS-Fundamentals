function solve(input) {
    let final = new Map();
    
    for (let word of input) {
        if (final.has(word)) {
            let currCount = final.get(word);
            final.set(word, currCount + 1);
        } else {
            final.set(word, 1);
        }
    }
    let sorted = Array.from(final.entries())
            .sort((a, b) => b[1] - a[1]);

    for (let el of sorted) {
        console.log(`${el[0]} -> ${el[1]} times`);
    }
}
solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);