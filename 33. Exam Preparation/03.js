function solve(input) {
    input.pop();
    let sailIndex = input.indexOf("Sail");

    let townsInput = input.slice(0, sailIndex);
    let actionInput = input.slice(sailIndex + 1);

    let towns = {};

    for (let townLine of townsInput) {
        let [townName, townPopulation, townGold] = townLine.split("||");
        townPopulation = Number(townPopulation);
        townGold = Number(townGold);

        if (!towns[townName]) {
            towns[townName] = {
                population: 0,
                gold: 0,
            };
        }

        towns[townName].population += townPopulation;
        towns[townName].gold += townGold;
    }

    for (let actionLine of actionInput) {
        actionLine = actionLine.split("=>");
        let currAction = actionLine[0];
        let currTown = actionLine[1];

        if (currAction === "Plunder") {
            let people = Number(actionLine[2]);
            let money = Number(actionLine[3]);

            towns[currTown].population -= people;
            towns[currTown].gold -= money;

            console.log(
                `${currTown} plundered! ${money} gold stolen, ${people} citizens killed.`
            );

            if (towns[currTown].population <= 0 || towns[currTown].gold <= 0) {
                console.log(`${currTown} has been wiped off the map!`);
                delete towns[currTown];
            }
        } else if (currAction === "Prosper") {
            let money = Number(actionLine[2]);
            if (money < 0) {
                console.log("Gold added cannot be a negative number!");
            } else {
                towns[currTown].gold += money;
                console.log(
                    `${money} gold added to the city treasury. ${currTown} now has ${towns[currTown].gold} gold.`
                );
            }
        }
    }

    towns = Object.entries(towns);

    if (towns.length === 0) {
        console.log(
            "Ahoy, Captain! All targets have been plundered and destroyed!"
        );
    } else {
        towns.sort((townA, townB) => {
            let townAName = townA[0];
            let townBName = townB[0];
            let townAProperties = townA[1];
            let townBProperties = townB[1];

            if (townAProperties.gold !== townBProperties.gold) {
                return townBProperties.gold - townAProperties.gold;
            } else {
                return townAName.localeCompare(townBName);
            }
        });
        console.log(
            `Ahoy, Captain! There are ${towns.length} wealthy settlements to go to:`
        );
        for (let currTown of towns) {
            let currTownName = currTown[0];
            let currTownProperties = currTown[1];

            console.log(
                `${currTownName} -> Population: ${currTownProperties.population} citizens, Gold: ${currTownProperties.gold} kg`
            );
        }
    }
}
solve([
    "Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End",
]);

solve([
    "Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End",
]);