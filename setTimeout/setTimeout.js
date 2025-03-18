const display = (text) => {
  console.log(text);
};

console.log("before setTimeout");
const timeoutId = setTimeout(display, 2000, "Hello");
console.log("after setTimeout");

// clearTimeout(timeoutId);
// clearInterval(timeoutId);
