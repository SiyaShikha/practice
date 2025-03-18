import dress from "./dress.json" with { type: "json" };

console.log(dress);

const dressInString = JSON.stringify(dress);
console.log(dressInString);

const dressInObject = JSON.parse(dressInString);
console.log(dressInObject);

//------------------------------------------------------

const person = {
  name: "Shikha",
  age: 21,
  city: "gorakhpur",
};

console.log(person);

const personInString = JSON.stringify(person);
console.log(personInString);

//------------------------------------------------------

console.log(JSON.parse('"Shikha"'));
console.log(JSON.parse("9"));
console.log(JSON.parse("[1, 2, 3, 4, 5]"));