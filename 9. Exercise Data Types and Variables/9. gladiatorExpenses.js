function gladiatorExpenses(lostFights, helmet, sword, shield, armor) {
    let brokenHelmets = 0;
    let brokenSwords = 0;
    let brokenShields = 0;
    let brokenArmours = 0;
    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 === 0) {
            brokenHelmets += 1;
        }
        if (i % 3 === 0) {
            brokenSwords += 1;
        }
        if (i % 6 === 0) {
            brokenShields += 1;
        }
        if (i % 12 === 0) {
            brokenArmours += 1;
        }
    }
    let price = brokenHelmets * helmet + brokenSwords * sword + brokenShields * shield + brokenArmours * armor;
    console.log(`Gladiator expenses: ${price.toFixed(2)} aureus`);
}
gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200
    
        
    );