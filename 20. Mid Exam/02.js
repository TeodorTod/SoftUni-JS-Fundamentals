function solve(arr) {
    let friends = arr.shift().split(", ");
    arr.pop();
    let blacklistedNames = 0;
    let lostNames = 0;

    for (let i = 0; i < arr.length; i++) {
        let [command, name, newName] = arr[i].split(" ");

        if (command === "Blacklist") {
            if (friends.includes(name)) {
                let currN = friends.indexOf(name);
                friends.splice(currN, 1, "Blacklisted");
                console.log(`${name} was blacklisted.`);
                blacklistedNames++;
            } else {
                console.log(`${name} was not found.`);
            }
        } else if(command === "Error") {
            name = Number(name);
            if (name >= 0 && name < friends.length && friends[name] !== "Blacklisted" && friends[name] !== "Lost") {
               let lost = friends.splice(name, 1, "Lost");
                console.log(`${lost} was lost due to an error.`);
                lostNames++;
            }
        } else if(command === "Change") {
            name = Number(name);
            if (name >= 0 && name < friends.length) {
               let currName =  friends.splice(name, 1, newName);
               console.log(`${currName} changed his username to ${newName}.`);
            }
        }
        
    }
    console.log(`Blacklisted names: ${blacklistedNames}`);
    console.log(`Lost names: ${lostNames}`);
    console.log(friends.join(" "));

}
solve((["Mike, John, Eddie",
"Blacklist Mike",
"Error 0",
"Report"])
);

solve((["Mike, John, Eddie, William",
"Error 3",
"Error 3",
"Change 0 Mike123",
"Report"])
);

solve((["Mike, John, Eddie, William",
"Blacklist Maya",
"Error 1",
"Change 4 George",
"Report"])
);