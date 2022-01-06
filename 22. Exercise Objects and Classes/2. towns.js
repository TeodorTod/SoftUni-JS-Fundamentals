function solve(input) {
    let obj = {};
    for (let singleLine of input) {
    let [town, latitude, longitude] = singleLine.split(" | ");
    let final = {
        town,
        latitude: Number(latitude).toFixed(2),
        longitude: Number(longitude).toFixed(2)
    };
    console.log(final);
}

}
solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
);