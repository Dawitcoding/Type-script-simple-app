import { invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payments.js";
const forms = document.querySelector(".new-item-form");
console.log(forms.children);
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// list template instance
const ul = document.querySelector(".item-list");
const list = new ListTemplate(ul);
forms.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
// generic
const addUid = (obj) => {
    let Uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { Uid });
};
const doc1 = addUid({ name: 'abel', age: 32 });
console.log(doc1);
