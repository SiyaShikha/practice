import { afterEach, beforeEach, describe, it } from "jsr:@std/testing/bdd";

const traceSteps = [];
const push = (array, msg) => {
  array.push(msg);
  array.forEach((msg) => {
    console.log(`## ${msg}`);
  });
  prompt("");
};

describe("first describe", () => {
  push(traceSteps, "first describe starts");

  beforeEach(() => {
    push(traceSteps, "beforeEach of first describe");
  });

  afterEach(() => {
    push(traceSteps, "afterEach of first describe");
  });
  
  it("first it", () => {
    push(traceSteps, "first describe first it");
  });
  it("second it", () => {
    push(traceSteps, "first describe second it");
  });

  push(traceSteps, "first describe ends");
});

describe("second describe", () => {
  push(traceSteps, "second describe starts");

  it("first it", () => {
    push(traceSteps, "second describe first it");
  });
  it("second it", () => {
    push(traceSteps, "second describe second it");
  });

  push(traceSteps, "second describe ends");
});

console.log(traceSteps);
