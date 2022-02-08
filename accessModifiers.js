var Person = /** @class */ (function () {
    function Person(a, b) {
        this.name = a;
        this.age = b;
        this.job = "Software Developer";
    }
    Person.prototype.tell = function () {
        return "My name is ".concat(this.name);
    };
    Person.prototype.setName = function (name) {
        return this.name = name;
    };
    return Person;
}());
var one = new Person("Joselito", 30);
console.log(one);
console.log(one.tell());
console.log(one.setName("Wario"));
console.log(one);
