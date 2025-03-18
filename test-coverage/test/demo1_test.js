import { describe, it } from "@std/testing/bdd";
import { assertEquals } from "@std/assert";
import { cube, square } from "../src/demo1.js";

describe("square", () => {
  it("should return 4", () => {
    assertEquals(square(2), 4);
  });
});

describe("cube", () => {
  it("should return 8", () => {
    assertEquals(cube(2), 8);
  });
});
