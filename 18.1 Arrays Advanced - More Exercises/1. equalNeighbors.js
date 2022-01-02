function solve(matrix) {
    let firstArr = matrix[0];
    let pairs = 0;
    for (let i = 0; i < matrix.length; i++) {
        let firstArr = matrix[i][0];
        let secondArr = matrix[i][i + 1];
        console.log(firstArr);
        
        
    }
    console.log(pairs);
}
solve([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
);