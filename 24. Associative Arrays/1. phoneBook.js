function solve(input) {
  let assArr = {};
  for (let entry of input) {
    entry = entry.split(" ");
    assArr[entry[0]] = entry[1];
    
  }
  for (let assKey in assArr) {
      console.log(`${assKey} -> ${assArr[assKey]}`);
  }
  
}

solve([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
