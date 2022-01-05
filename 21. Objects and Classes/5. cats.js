function solve(arr) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.meow = () => {
                console.log(`${this.name}, age ${this.age} says Meow`);
            };
        }
    }

    let cats = [];

    for (let currStr of arr) {
        let currData = currStr.split(" ");
        let currCat = new Cat(currData[0], currData[1]);
        cats.push(currCat); 
    }
    cats.forEach(c => c.meow());
}
solve(['Mellow 2', 'Tom 5']);