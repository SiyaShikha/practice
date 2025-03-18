import { describe, it } from "@std/testing/bdd";
import { assert, assertFalse } from "@std/assert";
import { isEven, isOdd } from "../src/demo2.js";

describe("isEven", () => {
  it("should return true", () => {
    assert(isEven(2));
  });
});

describe("isOdd", () => {
  it("should return true", () => {
    assert(isOdd(3));
  });

  it("should return false", () => {
    assertFalse(isOdd(2));
  });
});
