function solve(input) {
    let rawKey = input.shift();
  
    while (input[0] !== "Generate") {
      let line = input.shift();
      if (line.includes("Contains")) {
        let [word, substring] = line.split(">>>");
        if (rawKey.includes(substring)) {
          console.log(`${rawKey} contains ${substring}`);
        } else {
          console.log(`Substring not found!`);
        }
      } else if (line.includes("Flip")) {
        let [word, upOrLow, start, end] = line.split(">>>");
        start = Number(start);
        end = Number(end);
  
        if (upOrLow === "Upper") {
          let cut = rawKey.slice(start, end).toUpperCase();
          let first = rawKey.slice(0, start);
          let second = rawKey.slice(end);
          rawKey = first + cut + second;
  
          console.log(rawKey);
        } else if (upOrLow === "Lower") {
          let cut = rawKey.slice(start, end).toLowerCase();
          let first = rawKey.slice(0, start);
          let second = rawKey.slice(end);
          rawKey = first + cut + second;
  
          console.log(rawKey);
        }
      } else if (line.includes("Slice")) {
        let [word, start, end] = line.split(">>>");
        start = Number(start);
        end = Number(end);
        let first = rawKey.substring(0, start);
        let second = rawKey.substring(end);
        rawKey = first + second;
  
        console.log(rawKey);
      }
    }
    console.log(`Your activation key is: ${rawKey}`);
  }
  solve([
    "134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate",
  ]);