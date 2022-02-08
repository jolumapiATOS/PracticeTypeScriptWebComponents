class Person{
    private name: string;
    private age: number;
    private job: string;

    constructor(a: string, b: number) {
        this.name = a;
        this.age = b;
        this.job = "Software Developer";
    }
    tell() {
        return `My name is ${this.name}`
    }
    setName(name) {
        return this.name = name
    }
}

let one = new Person("Joselito", 30);
console.log(one)
console.log( one.tell() );
console.log( one.setName("Wario") )
console.log( one )