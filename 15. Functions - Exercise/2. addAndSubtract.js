function addSubstract(n1, n2, n3) {
    n1 = Number(n1);
    n2 = Number(n2);
    n3 = Number(n3);


    let sum = sumOfTwo => n1 + n2;
    let sub = subtract => sum() - n3;

    console.log(sub());
}
addSubstract(23,
    6,
    10
);