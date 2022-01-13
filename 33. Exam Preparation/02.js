function houseParty([input]) {
    let treshold = 1;
    let coolEmojis = [];
  
    let digits = input.match(/\d/g).map(Number);
  
    for (let el of digits) {
      treshold *= el;
    }
  
    let emojis = input.match(/(::|\*\*)[A-Z][a-z]{2,}(\1)/g);
  
    for (let emoji of emojis) {
      let coolnes = 0;
      let chars = emoji.slice(2, -2);
      for (let char of chars) {
        let currChar = char.charCodeAt(0);
        coolnes += currChar;
        if (coolnes > treshold) {
          coolEmojis.push(emoji);
          break;
        }
      }
    }
    console.log(`Cool threshold: ${treshold}`);
    console.log(`${emojis.length} emojis found in the text. The cool ones are:`);
    console.log(coolEmojis.join("\n"));
  }