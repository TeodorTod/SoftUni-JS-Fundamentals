function sort(arr) {
    let newArr = arr.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    });
    console.log(newArr.join("\n"));
}
sort(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);