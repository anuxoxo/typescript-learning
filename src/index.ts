let sales = 123_456_789;
let course = 'TypeScript'
let is_published = true

let level; // any

function render(doc: any) {
  console.log(doc)
}

let numbers: number[] = [1, 2, 3];

// Tuples
let user: [number, string] = [1, "Anu"];

// Enums
const enum Size { Small = 1, Medium, Large };
let mySize: Size = Size.Medium;
console.log(mySize);
// enum Size { Small = 's', Medium = 'm', Large = 'l' }; // by default - 0, 1, 2

function calculateTax(income: number): number {
  return 0;
}