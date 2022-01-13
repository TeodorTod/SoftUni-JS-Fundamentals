function solve(input) {
    let pass = input.shift();
    input.pop();

    for (let line of input) {
        line = line.split(" ");
        if (line[0] === "TakeOdd") {
            let newPass = "";
            for (let i = 1; i < pass.length; i+=2) {
                newPass += pass[i];
            }
            pass = newPass;
            console.log(pass);
            
        } else if (line[0] === "Cut") {
            let index = Number(line[1]);
            let cutLength = Number(line[2]);

            let first = pass.slice(0, index);
            let second = pass.slice(index + cutLength);
            pass = first + second;
            console.log(pass);

        } else if (line[0] === "Substitute") {
            let substring = line[1];
            let substitute = line[2];
            if (!pass.includes(substring)) {
                console.log("Nothing to replace!");
            } else {
                for (let el of pass) {
                    if (pass.includes(substring)) {
                        pass = pass.replace(substring, substitute);
                    }
                }
                console.log(pass);
            }
        }
    }
    console.log(`Your password is: ${pass}`);
}
solve((["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"])

);