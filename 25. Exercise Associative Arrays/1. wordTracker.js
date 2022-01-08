function solve(input) {
    let obj = {};
    let words = input.shift().split(" ");

    for (let currWord of words) {
        obj[currWord] = 0;
    }
    for (let word of input) {
        if (obj.hasOwnProperty(word)) {
            obj[word]++;
        }
    }

    let sorted = Object.entries(obj).sort((a, b) => {
        return b[1] - a[1];
    });
    sorted.forEach(el => {
        console.log(`${el[0]} - ${el[1]}`);
    });

}
solve([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);