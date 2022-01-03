function store(arr) {
    let price = 0;
    let arrL = arr.length;
    let isSpecial = false;

    for (let i = 0; i < arrL - 1; i++) {
        let currPrice = Number(arr[i]);
        if (currPrice < 0) {
            console.log("Invalid price!");
            continue;
        }
        price += currPrice;
    }
    if (arr[arrL - 1] === "special" && price > 0) {
        isSpecial = true;
    }

    let priceWithTaxes = price * 1.2;
    let taxes = price * 0.2;
    if (price <= 0) {
        console.log("Invalid order!");
    }
    if (isSpecial === true) {
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${price.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log("-".repeat(11));
        console.log(`Total price: ${(priceWithTaxes * 0.9).toFixed(2)}$`);
    } else if (price > 0) {
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${price.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log("-".repeat(11));
        console.log(`Total price: ${priceWithTaxes.toFixed(2)}$`);
    }
}
store(["regular"]);