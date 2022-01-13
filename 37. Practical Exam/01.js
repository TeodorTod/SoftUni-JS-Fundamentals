function solve(input) {
    let spell = input.shift();
    input.pop();

    for (let line of input) {
        line = line.split(" ");
        let command = line[0];

        if (command === "Abjuration") {
            spell = spell.toUpperCase();
            console.log(spell);
        } else if (command === "Necromancy") {
            spell = spell.toLowerCase();
            console.log(spell);
        } else if (command === "Illusion") {
            let index = Number(line[1]);
            let letter = line[2];
            if (index > spell.length - 1) {
                console.log("The spell was too weak.");
            } else {
                let first = spell.slice(0, index);
                let second = spell.slice(index + 1);
                spell = first + letter + second;
                console.log("Done!");
            }
        } else if (command === "Divination") {
            let firstSub = line[1];
            let secondSub = line[2];
            if (spell.includes(firstSub)) {
                for (let el of spell) {
                    spell = spell.replace(firstSub, secondSub);
                }
            }
            console.log(spell);
        } else if (command === "Alteration") {
            let substring = line[1];
            if (spell.includes(substring));
            let index = Number(spell.indexOf(substring));
            for (let i = 0; i < substring.length; i++) {
                spell = spell.replace(substring, "");

            }
            console.log(spell);

        } else {
            console.log("The spell did not work!");
        }
    }

}
solve((["TR1GG3R",
    "Necromancy",
    "Illusion 8 m",
    "Illusion 9 n",
    "Abracadabra"
]));