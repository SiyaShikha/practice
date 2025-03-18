const person = { name: "Shikha", age: 20, city: "Gorakhpur" };

// is key present in object
console.log("name" in person, "age" in person, "phone" in person);

// delete keys from object
delete person.age;
delete person["city"];
delete person.phone;

console.log(person);

// array of keys and array of values
const countriesAndCapitals = {
  India: "New Delhi",
  France: "Paris",
  Japan: "Tokyo",
};

console.log(Object.keys(countriesAndCapitals));
console.log(Object.values(countriesAndCapitals));

// array key-value arrays
console.log(Object.entries(countriesAndCapitals));
console.log(Object.entries(person));

// destructuring of objects
const p1 = { name: "Shikha", age: 20 };
const { name, age } = p1;
console.log(age);

const { b } = { a: 1, b: 2, c: 3 };
console.log(b);

const { a, c } = { a: 1, b: 2, c: 3 };
console.log(a, c);

const people = [
  { name: "Shikha", age: 20, city: "Gorakhpur" },
  { name: "Siya", age: 21, city: "Bangalore" },
];

console.log(people.filter(({ age }) => age > 20));

// using variable names different from key
const { b: num1, c: num2 } = { a: 1, b: 2, c: 3 };
console.log(num1, num2);
