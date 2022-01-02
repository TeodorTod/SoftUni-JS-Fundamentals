function process(arr) {
    let newArr = arr.filter((x, i) => i % 2 !== 0).reverse().map(x => x * 2).join(" ");
    // let finalArr = [];
    // // for (let i = 0; i < arr.length; i++) {
    // //     let curr = arr[i];
    // //     if (i % 2 === 0) {
    // //         continue;
    // //     } else {
    // //         newArr.push(curr);
    // //     }
    // // }
    // for (let j = newArr.length; j > 0; j--) {
    //     finalArr.push(newArr[j - 1]);
        
    // }
    // let finale = finalArr.map(x => x * 2).join(" ");
    // console.log(finale);
    console.log(newArr);
}
process([10, 15, 20, 25]);
