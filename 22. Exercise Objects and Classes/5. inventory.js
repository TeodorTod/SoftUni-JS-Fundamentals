function solve(input) {

    let heroes = [];

    let inputL = input.length;
    for (let i = 0; i < inputL; i++) {
       let [name, level, items] = input[i].split(" / ");
       
     let splited = items.split(", ");
     splited.sort((a, b) => a.localeCompare(b));
     let finale = splited.join(", ");
     
       
     let hero = {
        name: name,
        level: +level,
        items: finale
       };
        heroes.push(hero);
    }

    
    let sortedHeroes = heroes.sort((a,b) => a.level - b.level);
    sortedHeroes.forEach(hero => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    });

}
solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    );