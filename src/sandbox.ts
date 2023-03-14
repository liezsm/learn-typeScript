import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

const character: string = "test";

let myName: string = "Alice";

const inputs = document.querySelectorAll("input");

// inputs.forEach((input) => {
//   console.log(input);
// });

const circ = (diameter: number) => {
  return diameter * Math.PI;
};

console.log(circ(2));

const arr: string[] = ["test", "fdafds"];
arr.push("test");

console.log(arr);

let ninja = {
  name: "mario",
  belt: "black",
  age: 30,
};

let charac: string | boolean;
charac = "testtttttt";

charac = false;

// union types

const tire: (string | number)[] = ["test", 333];

let x: any = 25;
x = "luigi";

console.log("tessssst");

const greet = (name: string): void => {
  console.log("hello", name);
};

greet("nina");

const minus = (a: number, b: number): number => {
  return a - b;
};

const res = minus(10, 5);

// reminder: the purpose of type alliases is to reuse the same types to other functions/variables

type StringOrNum = string | number;

const logDetails = (uid: StringOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};

const greeted = (user: { name: string; uid: StringOrNum }) => {
  console.log(`${user.name} says hello`);
};

type person = { name: string; age: number };

let sayHi: (obj: { name: string; age: number }) => void;

sayHi = (ninja: person) => {
  console.log(`${ninja.name} is ${ninja.age}`);
};

sayHi({ name: "anna", age: 33 });

// const form = document.querySelector('form')

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// console.log(form.children);

const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;

  if (type.value == "invoice") {
    doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
  }

  console.log(doc);
});

const inv1 = new Invoice("mario", "work on marion website", 250);
const inv2 = new Invoice("test", "work on test website", 22);

// console.log(inv1);

let invoices: Invoice[] = [inv1, inv2];

console.log(invoices);

invoices.forEach((inv) => {
  console.log(`${inv.client} pays for ${inv.amount} ${inv.details}`);
});

//  interface

interface isPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(amt: number): number;
}

const me: isPerson = {
  name: "emman",
  age: 33,
  speak(lang: string) {
    console.log(lang);
  },
  spend(amount: number): number {
    console.log("I spend", amount);
    return amount;
  },
};

const greetPerson = (person: isPerson) => {
  console.log(`hello ${person.name}`);
};

greetPerson(me);

// interfaces with classes

let inv3: HasFormatter;

inv3 = new Invoice("elle", "workd on site", 222);

const invoicesWithFormatter: HasFormatter[] = [];
invoicesWithFormatter.push(inv3);
