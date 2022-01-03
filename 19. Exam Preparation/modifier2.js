function solve(arr) {
    let sequence = arr.shift().split(" ").map(Number);
    arr.pop();
    let final;
  
    for (let i = 0; i < arr.length; i++) {
      let [command, first, second] = arr[i].split(" ");
      if (command === "swap") {
        let a = sequence[Number(first)];
        let b = sequence[Number(second)];
        first = Number(first);
        second = Number(second);
        sequence.splice(first, 1, b);
        sequence.splice(second, 1, a);
      } else if (command === "multiply") {
        let a = sequence[Number(first)];
        let b = sequence[Number(second)];
        first = Number(first);
        second = Number(second);
        let res = a * b;
        sequence.splice(first, 1, res);
      } else {
        final = sequence.map((x) => {
            return x - 1;
        });
      }
    }
    return(final.join(", "));
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