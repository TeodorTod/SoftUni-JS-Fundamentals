function solve(arr) {
  let sequence = arr.shift().split(" ").map(Number);
  arr.pop();
  let final = [];

  for (let i = 0; i < arr.length; i++) {
    let [command, first, second] = arr[i].split(" ");
    first = Number(first);
    second = Number(second);
    if (command === "swap") {
        let a = sequence[first];
        let b = sequence[second];
        sequence[first] = b;
        sequence[second] = a;
    } else if (command === "multiply") {
        let a = sequence[first];
        let b = sequence[second];
     
        let res = a * b;
      sequence[first] = res;
    } else {
      for (let i = 0; i < sequence.length; i++) {
          sequence[i] -= 1;
          
      }
    }
  }
  return(sequence.join(", "));
}
console.log(solve([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ]
  
)); 
