function solve(arr) {
    let studentsCount = Number(arr.shift());
    let lectures = Number(arr.shift());
    let additionalBonus = Number(arr.shift());
    let newArr = arr.map(Number);
    newArr.sort((a, b) => b - a);
    let final = newArr.shift();


    let maxB = (final / lectures) * (5 + additionalBonus);
    if (maxB > 0) {
        console.log(`Max Bonus: ${Math.ceil(maxB)}.`);
        console.log(`The student has attended ${final} lectures.`);
    } else {
        console.log(`Max Bonus: 0.`);
        console.log(`The student has attended 0 lectures.`);
    }

}
solve([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
]);