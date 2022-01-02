function solve(arr1, arr2) {
   let bombNum = arr2[0];
   let power = arr2[1];

   let arrL = arr1.length;

   for (let i = 0; i < arrL; i++) {
       let curr = arr1[i];
       if (curr === bombNum) {
           let stopper = Number(arr1.indexOf(curr));
           let start = Number(stopper - power);
            arr1.splice(stopper, power + 1);
            if (start < 0) {
                start = 0;
            }
            arr1.splice(start, power);
            i = 0;
       }
       
   }
  
   let final = 0;
   for (let k = 0; k < arr1.length; k++) {
       final += Number(arr1[k]);
   }
   console.log(final);
}
solve([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
    );