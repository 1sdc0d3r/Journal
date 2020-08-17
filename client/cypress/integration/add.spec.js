const add = (a, b) => a + b;

it("adds two numbers", () => {
  expect(add(2, 3)).to.equal(5);
});
