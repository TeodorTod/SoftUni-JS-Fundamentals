function characters(firstChar, secondChar) {
    let firstS = (firstChar.charCodeAt(0));
    let secondS = (secondChar.charCodeAt(0));
    let final = "";
    
    if (firstChar < secondChar) {
        
        for (let i = Number(firstS); i < Number(secondS) - 1; i++) {
            final += String.fromCharCode(i + 1) + " ";
            
        }
    } else {
        for (let i = Number(secondS); i < Number(firstS) - 1; i++) {
            final += String.fromCharCode(i + 1) + " ";
        }
    }
    console.log(final);
   
}
characters('#',
':'
);