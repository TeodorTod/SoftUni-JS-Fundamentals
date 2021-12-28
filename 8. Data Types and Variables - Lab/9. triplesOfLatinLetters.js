function triplesOfLatinLetters(n) {
    for (let i = 0; i < n; i++) {
       for (let j = 0; j < n; j++) {
           for (let k = 0; k < n; k++) {
               let first = String.fromCharCode(97 + i);
               let second = String.fromCharCode(97 + j);
               let third = String.fromCharCode(97 + k);

               console.log(first + second + third);

           }
       } 
    }
}
triplesOfLatinLetters(3);