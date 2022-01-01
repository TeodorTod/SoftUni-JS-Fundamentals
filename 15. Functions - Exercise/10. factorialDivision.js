function factorialYes(n1, n2) {
    let firstSum = 1;
    let secondsum = 1;

    function firstFactorial() {
        for (let i = 1; i <= n1; i++) {
            firstSum *= i;
        }
        return firstSum;
    }

    function secondFactorial() {
        for (let i = 1; i <= n2; i++) {
            secondsum *= i;
        }
        return secondsum;
    }

    let res = firstFactorial() / secondFactorial();
    console.log(res.toFixed(2));
}
factorialYes(5, 2);