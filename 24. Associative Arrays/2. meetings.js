function solve(input) {
    let schedule = {};

    for (let line of input) {
        let [day, name] = line.split(" ");
        
        if (schedule.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            schedule[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }
    for (let key in schedule) {
        console.log(`${key} -> ${schedule[key]}`);
    }
}
solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
);