function solve(input) {

    let res = {};

  for (let i = 0; i < input.length; i+=2) {
     
        let product = input[i];
        let quantity = Number(input[i + 1]);
        if (!res.hasOwnProperty(product)) {
            res[product] = 0;
        }
        let updateQuantity = res[product];
        updateQuantity += quantity;
        res[product] = updateQuantity;
      
      
  }
 for (let key in res) {
     console.log(`${key} -> ${res[key]}`);
 }
    
}
solve([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    
    );