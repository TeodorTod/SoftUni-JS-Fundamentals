function kNumbers(n, k) {
    let sequence = [1];

    for (let i = 1; i < n; i++) {
       let startIndex = Math.max(0, i - k);
       let innerSequence = sequence.slice(startIndex, i);
       let sum = 0;
       for (let j = 0; j < innerSequence.length; j++) {
           sum += innerSequence[j];

       }
       sequence[i] = sum; 
    }
    console.log(sequence.join(" "));
}
kNumbers(6, 3);