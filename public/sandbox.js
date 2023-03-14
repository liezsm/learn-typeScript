import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";
const character = "test";
let myName = "Alice";
const inputs = document.querySelectorAll("input");
// inputs.forEach((input) => {
//   console.log(input);
// });
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(2));
const arr = ["test", "fdafds"];
arr.push("test");
console.log(arr);
let ninja = {
    name: "mario",
    belt: "black",
    age: 30,
};
let charac;
charac = "testtttttt";
charac = false;
// union types
const tire = ["test", 333];
let x = 25;
x = "luigi";
console.log("tessssst");
const greet = (name) => {
    console.log("hello", name);
};
greet("nina");
const minus = (a, b) => {
    return a - b;
};
const res = minus(10, 5);
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greeted = (user) => {
    console.log(`${user.name} says hello`);
};
let sayHi;
sayHi = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age}`);
};
sayHi({ name: "anna", age: 33 });
// const form = document.querySelector('form')
const form = document.querySelector(".new-item-form");
// console.log(form.children);
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector("ul");
const listTemplate = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value == "invoice") {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    listTemplate.render(doc, type.value, "end");
});
const inv1 = new Invoice("mario", "work on marion website", 250);
const inv2 = new Invoice("test", "work on test website", 22);
// console.log(inv1);
let invoices = [inv1, inv2];
console.log(invoices);
invoices.forEach((inv) => {
    console.log(`${inv.client} pays for ${inv.amount} ${inv.details}`);
});
const me = {
    name: "emman",
    age: 33,
    speak(lang) {
        console.log(lang);
    },
    spend(amount) {
        console.log("I spend", amount);
        return amount;
    },
};
const greetPerson = (person) => {
    console.log(`hello ${person.name}`);
};
greetPerson(me);
// interfaces with classes
let inv3;
inv3 = new Invoice("elle", "workd on site", 222);
const invoicesWithFormatter = [];
invoicesWithFormatter.push(inv3);
