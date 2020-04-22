import { Add, Sub, Mul, Div } from "../src/utils/calc";

describe("Calculator", () => {
  it("adds two numbers", () => {
    expect(Add(2, 3)).toBe(5);
  });
  it("Subtracts two numbers", () => {
    expect(Sub(5, 3)).toBe(2);
  });
  it("Multiplies two numbers", () => {
    expect(Mul(2, 3)).toBe(6);
  });
  it("divides two numbers", () => {
    expect(Div(9, 3)).toBe(3);
  });
});
