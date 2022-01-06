function solve(arr1, arr2) {
    let storeProduct = {};
    for (let i = 0; i < arr1.length; i+=2) {
        product = arr1[i];
        storeProduct[product] = Number(arr1[i + 1]);
        
    }
    for (let i = 0; i < arr2.length; i+=2) {
       let product = arr2[i];
        
       if(!storeProduct.hasOwnProperty(product)) {
           storeProduct[product] = 0;
       } 
        
       storeProduct[product] += Number(arr2[i + 1]);
      
       
    }
    
    for (let product in storeProduct) {
        console.log(`${product} -> ${storeProduct[product]}`);
    }
}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    );