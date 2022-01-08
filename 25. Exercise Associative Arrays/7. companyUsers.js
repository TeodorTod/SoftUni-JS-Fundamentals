function solve(input) {
    let finalObj = {};

    for (let line of input) {
        let [company, employer] = line.split(" -> ");
        if (!finalObj.hasOwnProperty(company)) {
            finalObj[company] = [];
        }
        if (!finalObj[company].includes(employer)) {
            finalObj[company].push(employer);
        }

    }
    let sortetCompanies = Object.keys(finalObj);
    sortetCompanies.sort((a, b) => {
        return a.localeCompare(b);
    });

    for (let company of sortetCompanies) {
        console.log(company);
        for (let emp of finalObj[company]) {
            console.log(`-- ${emp}`);
        }
    }

}
solve([
        'SoftUni -> AA12345',
        'SoftUni -> CC12344',
        'Lenovo -> XX23456',
        'SoftUni -> AA12345',
        'Movement -> DD11111'
    ]

);