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

// Function
//  taxYear? -> makes it optional
function calculateTax(income: number, taxYear: number = 2022): number {
  if (taxYear < 2022)
    return income * 1.25;
  return income * 1.3;
}
calculateTax(10_000, 2023);

// Type alias
type Employee = {
  readonly id: number,
  name: string,
  retire: (date: Date) => void
}

// Objects 
let employee: Employee = {
  id: 1,
  name: "Anu",
  retire: (date: Date) => {
    console.log(date)
  }
};

// Union Types (a|b)
function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === 'number')
    return weight * 2.2;
  else
    return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs('10kg');

// Intersection Types
type Draggable = {
  drag: () => void
}

type Resizable = {
  resize: () => void
}

type UIWidget = Draggable & Resizable;
let textBox: UIWidget = {
  drag: () => { },
  resize: () => { }
}

// Literal (exact,specific)
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = 'cm' | 'inch';

// Nullable Types
function greet(name: string | null | undefined) {
  if (name)
    console.log(name.toUpperCase());
  else
    console.log("Hola")
}
greet(null);

// Optional Chaining
type Customer = {
  birthday: Date
}

function getCustomer(id: number): Customer | null {
  return id === 0 ? null : { birthday: new Date() }
}

let customer = getCustomer(1);
// Optional property access operator
console.log(customer?.birthday?.getFullYear());

// customers?.[0]

// Optional call
let log: any = null;
log?.('a');