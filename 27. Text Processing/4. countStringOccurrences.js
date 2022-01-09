function solve(text, word) {
    let newArr = text.split(" ");
    let counter = 0;

    for (let line of newArr) {
        if (line === word) {
            counter += 1;
        }
    }
    console.log(counter);
}
solve('This is a word and it also is a sentence',
'is'
);