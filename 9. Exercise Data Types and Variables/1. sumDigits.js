function sumDigits(n) {
    let sum = 0;
    n = n.toString();
    for (let index = 0; index < n.length; index++) {
        sum += Number(n[index]);
        
    }
    console.log(sum);
}
sumDigits(245678);