function fuelMoney(distance, passangers, priceForOne) {
    let fuel = (distance / 100) * 7;
    fuel += (passangers * 0.1);
    let price = fuel * priceForOne;
    console.log(`Needed money for that trip is ${price} lv.`);
}
fuelMoney(90, 14, 2.88);