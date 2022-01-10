function solve(text) {
    text = text.split("").reverse().join("");
    let first = text.substring(0, text.length / 2);
    let second = text.substring(text.length / 2, text.length);
    console.log(second);
    console.log(first);  
}
solve('tluciffiDsIsihTgnizamAoSsIsihT');