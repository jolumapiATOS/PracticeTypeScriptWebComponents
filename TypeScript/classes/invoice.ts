import { Formatter } from '../Interfaces/formatter.js';

export class Quote implements Formatter {
    readonly name: string;
    readonly concept: string;
    readonly amount: number;
    constructor (a: string,b:string,c:number) {
        this.name = a;
        this.concept = b;
        this.amount = c;
    }

    format(): string {
        return `The client for this quote is ${this.name} for the concept ${this.concept}, and the amount is ${this.amount}`
    }
}
