const isCircular = function (obj) {
  if (this.has(obj)) {
    return true;
  }
  this.add(obj);

  for (const value of Object.values(obj)) {
    if (isCircular.call(this, value)) {
      return true;
    }
  }

  return false;
};

const emptySet = new Set();

const obj1 = { a: 1, b: 2, c: 3 };

const a = { a: 1 };
const b = { a: 1 };
a.x = b;
b.y = a;
const obj2 = { a: a, b: b };

console.log(isCircular.call(emptySet, obj1));
emptySet.clear();
console.log(isCircular.call(emptySet, obj2));
