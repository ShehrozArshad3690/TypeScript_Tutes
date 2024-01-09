import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
import { hasFormator } from "./interface/hasFormator.js";
import { ListTemplate } from "./classes/listTemplate.js";

// let docOne: hasFormator;
// let docTwo: hasFormator;
// docOne = new Invoice("Khalil", "Teacher", 15000);
// docTwo = new Payment("Shahid", "Medical Influencer", 35000);
// let docs: hasFormator[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// docs.forEach((doc) => {
//   console.log(doc.format());
// });

// const invOne = new Invoice("shehroz", "integerated api", 1000);
// const invTwo = new Invoice("fahad", "frontend", 2500);
// let Invoices: Invoice[] = []; // same as the array of strings(string[])=> Invoice[] means array of objects of class Invoice
// Invoices.push(invOne);
// Invoices.push(invTwo);
// Invoices.forEach((inv) => {
//   console.log(inv.client, inv.amount, inv.format());
// });

const form = document.querySelector(".new-item-form") as HTMLFormElement;

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let values: [string, string, number];
  values = [tofrom.value, details.value, amount.valueAsNumber];
  let doc: hasFormator;
  if (type.value === "invoice") {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }
  list.render(doc, type.value, "end");
});
