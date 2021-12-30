function addAndRemove(arr) {
    let arrL = arr.length;
    let final = [];
  

    for (let i = 0; i < arrL; i++) {
       let curr = arr[i];
       if (curr === "add") {
           final.push(`${i + 1}`);
           
       } else {
           final.pop();
       }
        
    }
   
    if (final.length > 0) {
        console.log(final.join(" "));
    } else {
        console.log("Empty");
    }
}
addAndRemove(['remove', 'remove', 'remove']);