export class Quote {
    constructor(a, b, c) {
        this.name = a;
        this.concept = b;
        this.amount = c;
    }
    format() {
        return `The client for this quote is ${this.name} for the concept ${this.concept}, and the amount is ${this.amount}`;
    }
}
