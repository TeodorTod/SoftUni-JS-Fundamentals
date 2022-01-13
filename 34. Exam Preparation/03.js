function solve(input) {
    let heroNum = Number(input.shift());
    let finalObj = {};

    for (let i = 0; i < heroNum; i++) {
        let [hero, health, mana] = input.shift().split(" ");
        health = Number(health);
        mana = Number(mana);
        if (health > 100) {
            health = 100;
        }
        if (mana > 200) {
            mana = 200;
        }
        finalObj[hero] = {
            hp: health,
            mp: mana
        };
    }

    input.pop();

    for (let line of input) {
        line = line.split(" - ");
        if (line[0] === "CastSpell") {
            let heroName = line[1];
            let manaNeeded = Number(line[2]);
            let castSpell = line[3];

            if (finalObj.hasOwnProperty(heroName)) {
                let mana = finalObj[heroName].mp;
                if (mana >= manaNeeded) {
                    finalObj[heroName].mp = mana - manaNeeded;
                    console.log(`${heroName} has successfully cast ${castSpell} and now has ${finalObj[heroName].mp} MP!`);
                } else {
                    console.log(`${heroName} does not have enough MP to cast ${castSpell}!`);
                }
            }

        } else if (line[0] === "TakeDamage") {
            let heroName = line[1];
            let damage = Number(line[2]);
            let attacker = line[3];

            if (finalObj.hasOwnProperty(heroName)) {
                let life = finalObj[heroName].hp;
                if (life > damage) {
                    finalObj[heroName].hp = life - damage;
                    console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${finalObj[heroName].hp} HP left!`);
                } else {
                    console.log(`${heroName} has been killed by ${attacker}!`);
                }
            }

        } else if (line[0] === "Recharge") {
            let heroName = line[1];
            let amount = Number(line[2]);


            if (finalObj.hasOwnProperty(heroName)) {
                let oldMana = finalObj[heroName].mp;
                finalObj[heroName].mp = oldMana + amount;
                if (finalObj[heroName].mp > 200) {
                    finalObj[heroName].mp = 200;
                    let rechargedMana = finalObj[heroName].mp - oldMana;

                    console.log(`${heroName} recharged for ${rechargedMana} MP!`);
                } else {
                    console.log(`${heroName} recharged for ${amount} MP!`);
                }

            }

        } else if (line[0] === "Heal") {
            let heroName = line[1];
            let amount = Number(line[2]);


            if (finalObj.hasOwnProperty(heroName)) {
                let oldHp = finalObj[heroName].hp;
                finalObj[heroName].hp = oldHp + amount;
                if (finalObj[heroName].hp > 100) {
                    finalObj[heroName].hp = 100;
                    let rechargedHealth = finalObj[heroName].hp - oldHp;
                    console.log(`${heroName} healed for ${rechargedHealth} HP!`);
                } else {
                    console.log(`${heroName} healed for ${amount} HP!`);
                }

            }
        }
    }

    let sortedHeroes = Object.entries(finalObj).sort((a, b) => {

        let firstHero = Object.values(a[1]);
        let secondHero = Object.values(b[1]);

        if (secondHero[0] - firstHero[0] != 0) {
            return secondHero[0] - firstHero[0];
        } else {
            return a[0].localeCompare(b[0]);
        }
    });

    sortedHeroes.forEach(hero => {
        console.log(`${hero[0]}`);
        let result = Object.entries(hero[1]);
        console.log(`  HP: ${result[0][1]}`);
        console.log(`  MP: ${result[1][1]}`);

    });


}
solve([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
]);