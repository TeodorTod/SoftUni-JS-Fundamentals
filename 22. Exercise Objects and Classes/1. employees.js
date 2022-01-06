function solve(input) {

    for (let person of input) {
        
        let singlePerson = {
            name: person,
            num: person.length
        };
        console.log(`Name: ${singlePerson.name} -- Personal Number: ${singlePerson.num}`);
    }

}
solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    );