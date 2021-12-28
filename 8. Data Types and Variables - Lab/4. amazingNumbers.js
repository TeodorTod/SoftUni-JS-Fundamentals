function amazingNumbers(num) {
    num = num.toString();
    let sum = 0;
    for (let index = 0; index < num.length; index++) {
      sum += Number(num[index]);

   }
   let isTrue = true;
   sum = sum.toString();
   for (let j = 0; j < sum.length; j++) {
    let curr = sum[j];
    // console.log(curr === "9" ? `${num} Amazing? True` :  `${num} Amazing? False`);   
      if (curr === "9") {
          console.log(`${num} Amazing? True`);
          isTrue = false;
          break;
      
      }
   }
   if (isTrue === true) {
        console.log(`${num} Amazing? False`);
        
   }
}
amazingNumbers(999);