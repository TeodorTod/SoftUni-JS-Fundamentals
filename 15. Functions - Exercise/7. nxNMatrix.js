function matrix(num) {
  for (let k = 0; k < num; k++) {
    let curr = "";
    for (let i = 0; i < num; i++) {
      curr += num + " ";
    }
    console.log(curr);
  }
}
matrix(7);
