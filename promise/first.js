const separate = () => {
  console.log("=".repeat(20));
};

const first = () => {
  console.log("1. before promise");
  new Promise(() => console.log("2. inside promise"));
  console.log("3. after promise");
  separate();
};

const second = () => {
  console.log("1. before promise");
  const a = new Promise((resolve, reject) => resolve("2. promise resolved"));
  console.log(a);
  console.log("3. after promise");
  separate();
};

const third = () => {
  console.log("1. before promise");
  const b = new Promise((resolve, reject) => {
    const x = 3;
    if (x > 0) {
      console.log("2. resolved");
      resolve("resolved");
    } else {
      console.log("2. rejected");
      reject("rejected");
    }
  });
  console.log(b);
  console.log("3. after promise");
  separate();
};

const fourth = () => {
  console.log("1. before promise");
  new Promise((resolve, reject) => resolve("2. promise resolved"))
    .then(console.log);
  console.log("3. after promise");
};

const fifth = () => {
  console.log("1. before promise");
  new Promise(() =>
    setTimeout(() => {
      console.log("2. inside setTimeOut of promise");
    }, 1000)
  );
  console.log("3. after promise");
};

first();
second();
third();
// fourth();
fifth();
