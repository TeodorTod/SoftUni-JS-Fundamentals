function solve(sentance) {
    let newArr = sentance.split(" ");
    let arrWord = [];
    
    let final = [];
    for (let word of newArr) {
        if (word.includes("#") && word.length > 1) {
            word = word.replace("#", " ").trim();
            arrWord.push(word);
        }
    }
    
    for (let el of arrWord) {
        let letter = el.split("");
        let isTrue = true;
        for (let i = 0; i < letter.length; i++) {
            let currCode = letter[i].charCodeAt(0);
            if ((currCode < 97 || currCode > 122) && 
                (currCode < 65 || currCode > 90)) {
                isTrue = false;
               
            }
        }
        if (isTrue) {
            final.push(el);
        }
        
    }
    
    
    final.forEach((el) => {
        console.log(el);
    });
}
solve("Nowadays everyone uses # to tag a #s1 word in #so");