class Rectangle {
  // Private fields
  #width;
  #length;

  constructor(width, length) {
    this.#width = width;
    this.#length = length;
    // this.any = length;
    // console.log("area inside constructor", this.area());
  }

  //Private method
  #multiply(a, b) {
    return a * b;
  }

  area() {
    return this.#multiply(this.#width, this.#length);
  }

  name = "My rectangle";
  // we can't use this here, we can use this only inside methods
  // dimensions = [this.#width, this.#length, this.any];
  dimensions = [10, 20];

  perimeter() {
    return 2 * (this.#width + this.#length);
  }

  visualize() {
    return ("*".repeat(this.#width) + "\n").repeat(this.#length);
  }
}

const r1 = new Rectangle(10, 5);
console.log("r1 = ", r1);

console.log(r1.visualize());
console.log("area = ", r1.area());
console.log("perimeter = ", r1.perimeter());

console.log("width = ", r1.width);
console.log("length = ", r1.length);

const r2 = new Rectangle(6, 6);
console.log("r2 = ", r2);

console.log("typeof class : ", typeof Rectangle);
console.log("typeof object : ", typeof r1);
r2._any = 10;
console.log("changed any", r2._any);

// console.log(r1.area === r2.area); //true
// console.log(r1.dimensions === r2.dimensions); //false

// console.log(Rectangle.constructor === Rectangle); //false
// console.log(Rectangle.prototype.constructor === Rectangle); //true

// public fields (true)
// console.log(r1.hasOwnProperty("dimensions"));
// console.log(r1.hasOwnProperty("name"));
// private fields (false)
// console.log(r1.hasOwnProperty("length"));
