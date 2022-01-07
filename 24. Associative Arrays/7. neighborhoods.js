function solve(input) {
    let neighborhoods = new Map();
    let streets = input.shift().split(", ");
    
    for (let currN of streets) {
        neighborhoods.set(currN, []);
    }

    for (let currentPerson of input) {
        currentPerson = currentPerson.split(" - ");
        let personNeighborhood = currentPerson[0];
        let person = currentPerson[1];
        
        if (neighborhoods.has(personNeighborhood)) {
            neighborhoods.get(personNeighborhood).push(person);
        }
    }
    let sorted = Array.from(neighborhoods.entries())
                    .sort((a, b) => b[1].length - a[1].length);

    for (let el of sorted) {
        let neighborhoodToP = el[0];
        let personToP = el[1];
        console.log(`${neighborhoodToP}: ${personToP.length}`);
        for (let currP of personToP) {
            console.log(`--${currP}`);
        }
    }
}
solve(['Abbey Street, Herald Street, Bright Mews',
'Bright Mews - Garry',
'Bright Mews - Andrea',
'Invalid Street - Tommy',
'Abbey Street - Billy']
);