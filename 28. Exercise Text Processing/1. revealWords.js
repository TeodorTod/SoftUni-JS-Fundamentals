function solve(words, sentance) {
    let str;
    let replaced;
    if (words.includes(", ")) {
        str = words.split(", ");
    } else {
        str = words;
    }
    let newArr = sentance.split(" ");
    for (let el of newArr) {
        if (el.includes("*")) {
           if (str !== words) {
              for (let wordInArr of str) {
                  if (wordInArr.length === el.length) {
                      replaced = sentance.replace(el, wordInArr);
                      sentance = replaced;
                  }
              }
           } else {
            replaced = sentance.replace(el, str);
           }
        }
    }
    console.log(replaced);
}
solve('great',
'softuni is ***** place for learning new programming languages'

);