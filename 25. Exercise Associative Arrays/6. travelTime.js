function solve(input) {

   let countries = {};
   
   for(let row of input) {
       let currentRow = row.split(" > ");
       let country = currentRow[0];
       let city = currentRow[1];
       let price = Number(currentRow[2]);

        if (!countries.hasOwnProperty(country)) {
            countries[country] = {};
        }
        if (!countries[country].hasOwnProperty(city)) {
            countries[country][city] = price;
        }
        if (countries[country][city] > price) {
            countries[country][city] = price;
        }

   }
   
   let keys = Object.keys(countries);
   keys.sort((a, b) => a.localeCompare(b));
  
   for (let item of keys) {
       let sortedCities = Object.entries(countries[item]);
       sortedCities.sort((a,b) => a[1] - b[1]);

       let res = [];
       for (let city of sortedCities) {
           res.push(city.join(" -> "));
       }
       console.log(`${item} -> ${res.join(" ")}`);
   }
}
solve([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ]
    );