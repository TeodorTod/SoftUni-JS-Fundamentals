function solve(arr) {
  let firstEmp = Number(arr[0]);
  let secondtEmp = Number(arr[1]);
  let thirdEmp = Number(arr[2]);
  let questions = Number(arr[3]);
  let allPower = firstEmp + secondtEmp + thirdEmp;
  let hours = 0;

  while (questions > 0) {
    questions -= allPower;
    hours++;
    if (hours % 4 === 0) {
      hours++;
    }
  }
  console.log(`Time needed: ${hours}h.`);
}
solve(["1", "2", "3", "45"]);
