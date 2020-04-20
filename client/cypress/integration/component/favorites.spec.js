describe("/favorite", () => {
  it("visits favorite", () => {
    cy.visit("/");
    cy.loginWith();
    cy.get("a[href='/favorite']").click();
    cy.contains("h1", /favorites/i);
  });
  it('"journal" btn directs to /journal', () => {
      cy.get("button").contains("")
  });
});
