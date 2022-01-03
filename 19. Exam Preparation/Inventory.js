function solve(arr) {
  let items = arr.shift().split(", ");
  arr.pop();

  for (let i = 0; i < arr.length; i++) {
    let [command, item] = arr[i].split(" - ");

    if (command === "Collect") {
      if (!items.includes(item)) {
        items.push(item);
      }
    } else if (command === "Drop") {
      for (let j = 0; j < items.length; j++) {
        let currEl = items[j];
        if (currEl === item) {
          items.splice(j, 1);
        }
      }
    } else if (command === "Combine Items") {
      let [old, newOne] = item.split(":");
      if (items.includes(old)) {
        for (let k = 0; k < items.length; k++) {
          let insideOld = items[k];
          if (insideOld === old) {
            items.splice(k + 1, 0, newOne);
          }
        }
      }
    } else if (command === "Renew") {
      for (let m = 0; m < items.length; m++) {
        let currRenew = items[m];
        if (currRenew === item) {
          items.splice(m, 1);
          items.push(currRenew);
          break;
        }
      }
    }
  }
  console.log(items.join(", "));
}
solve([
  "Iron, Sword",
  "Drop - Bronze",
  "Combine Items - Sword:Bow",
  "Renew - Iron",
  "Craft!",
]);
solve(["Iron, Wood, Sword", "Collect - Gold", "Drop - Wood", "Craft!"]);
