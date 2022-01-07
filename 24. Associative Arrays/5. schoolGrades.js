function solve(input) {
    let schoolGrades = new Map();
    for (let entry of input) {
        entry = entry.split(" ");
        let name = entry.shift();
        let grades = entry.map(Number);

        if (schoolGrades.has(name)) {
            let currGrades = schoolGrades.get(name);
            for (let grade of grades) {
                currGrades.push(grade);
            }
            schoolGrades.set(name, currGrades);
        } else {
            schoolGrades.set(name, grades);
        }
    }

    let sortedSchoolGrades = Array.from(schoolGrades.entries())
        .sort((a, b) => averageSort(a, b));

    for (let key of sortedSchoolGrades) {
        console.log(`${key[0]}: ${key[1].join(", ")}`);
    }

    function averageSort(a, b) {
        let sumA = 0;
        let sumB = 0;
        let gradesA = a[1];
        let gradesB = b[1];
        gradesA.forEach(ga => sumA += ga);
        gradesB.forEach(gb => sumB += gb);
        let averageA = sumA / gradesA.length;
        let averageB = sumB / gradesB.length;

        return averageA - averageB;
    }
}
solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'
]);