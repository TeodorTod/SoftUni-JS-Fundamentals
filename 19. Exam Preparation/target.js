function solve(arr) {
    let sequence = arr.shift().split(" ").map(Number);
    arr.pop();

    for (let i = 0; i < arr.length; i++) {
        let [name, index, value] = arr[i].split(" ");
        index = Number(index);
        value = Number(value);
        switch (name) {
            case "Shoot":

                if (index <= sequence.length && index >= 0) {
                    sequence[index] -= 10;
                }
                if (sequence[index] <= value) {
                    sequence.splice(index, 1);

                }
                break;
            case "Add":
                if (index < sequence.length && index >= 0) {
                    sequence.splice(index, 0, value);
                } else {
                    console.log("Invalid placement!");
                }
                break;
            case "Strike":

                if (index - value >= 0 && index + value < sequence.length) {
                    sequence.splice(index - value, 2 * value + 1);

                } else {

                    console.log("Strike missed!");
                }
                break;


        }

    }
    console.log(sequence.join("|"));
}
solve((["1 2 3 4 5",
    "Strike 0 1",
    "End"
]));