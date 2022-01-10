function solve(input) {
    let final = [];
    input = input.split("");
    for (let el of input) {
        
        if (el.charCodeAt(0) >= 65 && el.charCodeAt(0) <= 90) {
            final.push(el);
        } else if (el.charCodeAt(0) >= 97 && el.charCodeAt(0) <= 122) {
            final[final.length - 1] += el;
        }

    }
    let newArr = " ";
    for (let i = 0; i < final.length - 1; i++) {
        let finalWord = final[i];
        newArr += finalWord + ", ";
        
    }
    newArr += final[final.length - 1];
   console.log(newArr.trim());


}
solve('ThisIsSoAnnoyingToDo');