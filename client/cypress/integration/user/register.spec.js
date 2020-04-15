describe("/register", () => {
  it("should login", () => {
    cy.login();
    cy.visit("/");
  });
});
