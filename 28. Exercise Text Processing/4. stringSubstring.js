function solve(word, text) {
    let newWord = word.toLowerCase();
    let newText = text.toLowerCase();
    let flag = true;

    let newArr = newText.split(" ");

    for (let singleWord of newArr) {
        if (singleWord === newWord) {
            console.log(word);
            flag = false;
            break;
        }
    }
    if (flag) {
        console.log(`${word} not found!`);
    }
}
solve('javascript',
    'JavaScript is the best programming language'
);