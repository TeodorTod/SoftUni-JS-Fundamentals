function solve(text, word) {
 let censoredWord = "*".repeat(word.length);

 let newStr = text.replace(word, censoredWord);

 while (newStr.includes(word)) {
    newStr = newStr.replace(word, censoredWord); 
 }
 console.log(newStr);
}
solve('Find the hided word', 'hided');