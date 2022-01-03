function solve(arr) {
    let newArr = arr.split("|");
    let health = 100;
    let bonus = 0;
    let newArrL = newArr.length;
    let isDead = true;

    for (let i = 0; i < newArrL; i++) {
        let [command, num] = newArr[i].split(" ");
        num = Number(num);
        if (command === "potion") {
            if (health + num > 100) {
                num = 100 - health;
            }
            console.log(`You healed for ${num} hp.`);
            if (health > 100) {
                health = 100;
            }
            health += num;
            console.log(`Current health: ${health} hp.`);
        } else if (command === "chest") {
            bonus += num;
            console.log(`You found ${num} bitcoins.`);
        } else {
            health -= num;
            if (health > 0) {
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${i + 1}`);
                isDead = false;
                break;
            }
        }
    }
    if (isDead === true) {
        console.log("You've made it!");
        console.log(`Bitcoins: ${bonus}`);
        console.log(`Health: ${health}`);
    }
}
solve("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");