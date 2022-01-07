function solve(input) {
    let storage = new Map();
    for (let entry of input) {
        let [product, quantity] = entry.split(" ");
        quantity = Number(quantity);
        
        if (storage.has(product)) {
            let newQuantity = storage.get(product) + quantity;
            storage.set(product, newQuantity);
        } else {
            storage.set(product, quantity);
        }
    }
    for (let key of storage) {
        console.log(`${key[0]} -> ${key[1]}`);
    }

}
solve(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
);