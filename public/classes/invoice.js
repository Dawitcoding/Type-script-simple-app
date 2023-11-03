// class
export class invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return (`${this.client} ows ${this.amount} for ${this.details} `);
    }
}
