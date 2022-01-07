function solve(input) {
    let obj = {};

    for (let line of input) {
        let [name, adress] = line.split(":");
        obj[name] = adress;
    }
    let sortedObj = Object.entries(obj);
    sortedObj.sort((a, b) => a[0].localeCompare(b[0]));
    for (let line of sortedObj) {
        console.log(`${line[0]} -> ${line[1]}`);
    }
}
solve(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'
]);