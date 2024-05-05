// hardcode what you can, whats dynamic, and if you can't let the code do it.

const myName = "Natalie Tesam";
let yourName = "Someone Else";
yourName = prompt("What is your name?");

const h1 = document.querySelector("h1");
// h1.textContent = `Hello, ${yourName}!`;
// overwrites the old html element, do += to add to hardcoded html. Backtick 
h1.innerHTML = `<em> Hello, ${yourName}! </em>`;

// This is useful later to create new elements on the page based on
// outside information like a database.
// creating a new section
const section = document.createElement("section");

// creates the h2 element to add
const h2 = document.createElement("h2");
h2.textContent = "Section 3";

// creates the p element to add
const p = document.createElement("p");
p.textContent = "This is a paragraph in section 3";

// adding h2 and p eleements as children to the section
section.appendChild(h2);
section.appendChild(p)

// adding section to the body
document.body.appendChild(section);