function solve(arr) {
    let food = Number(arr.shift());
    let hay = Number(arr.shift());
    let cover = Number(arr.shift());
    let weight = Number(arr.shift());

    for (let i = 1; i <= 30; i++) {
        food -= 0.3;
        if (i % 2 === 0) {
            hay -= (0.05 * food);
        }
        if (i % 3 === 0) {
            cover -= (weight / 3);
        }
        
    }
    if (food > 0 && hay > 0 && cover > 0) {
        console.log(`Everything is fine! Puppy is happy! Food: ${food.toFixed(2)}, Hay: ${hay.toFixed(2)}, Cover: ${cover.toFixed(2)}.`);
    } else {
        console.log("Merry must go to the pet store!");
    }
    
}

solve((["9",
"5",
"5.2",
"1"])
);