function dungeonestDark(arr) {
    let newArr = arr.join("");
    let newMassive = newArr.split("|");
    let arrL = newMassive.length;
    let initialHealth = 100;
    let coins = 0;
    let isDead = true;
    for (let i = 0; i < arrL; i++) {
       let curr = newMassive[i];
       let insideArr = curr.split(" ");
       for (let j = 0; j < insideArr.length; j++) {
           if (insideArr[0] === "potion") {
               if (initialHealth + Number(insideArr[1]) > 100) {
                   let currHealth = (100 + Number(insideArr[1])) - (initialHealth + Number(insideArr[1]));
                   console.log(`You healed for ${Number(currHealth)} hp.`);
               } else {
                console.log(`You healed for ${Number(insideArr[1])} hp.`);
               }
               initialHealth += Number(insideArr[1]);
               if (initialHealth > 100) {
                   initialHealth = 100;
               }
            
               console.log(`Current health: ${initialHealth} hp.`);
               break;
           } else if (insideArr[0] === "chest") {
               coins += Number(insideArr[1]);
               console.log(`You found ${insideArr[1]} coins.`);
               break;
           } else {
               if (initialHealth > insideArr[1]) {
                   initialHealth -= insideArr[1];
                   console.log(`You slayed ${insideArr[0]}.`);
                   break;
               } else {
                   console.log(`You died! Killed by ${insideArr[0]}.`);
                   console.log(`Best room: ${Number(i + 1)}`);
                   isDead = false;
                   break;
               }
           }   
       }
       if (isDead === false) {
        break;
       }
        
    }
    if (isDead === true) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${initialHealth}`);
    }
    
}
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
