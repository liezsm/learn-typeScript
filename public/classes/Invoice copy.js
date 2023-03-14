"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = void 0;
// classes
class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
exports.Invoice = Invoice;
