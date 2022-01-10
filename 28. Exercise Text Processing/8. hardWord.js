function solve(input) {
    let unchanged = input[0];
    let newArr = input[0].split(" ");
    let words = input[1];
    for (let word of newArr) {
        if (word.includes("_")) {
            for (let el of words) {
                if (word.length === el.length) {
                    unchanged = unchanged.replace(word, el);
                }
            }
        }
    }
    console.log(newArr);
}
solve(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
);