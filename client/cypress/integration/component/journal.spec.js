describe("/journal", () => {
  it("visits journal", () => {
    cy.visit("/");
    cy.register();
    cy.get("a[href='/journal']").click();
    cy.url().should("contain", "/journal");
  });
  it("'First entry' btn directs to /entry", () => {
    cy.get("button")
      .contains(/add your first entry!/i)
      .click();
    cy.url().should("contain", "/entry");
    cy.entry();
  });

  it("edit btn modifies entry", () => {
    cy.get("p")
      .contains("Description:")
      .invoke("text")
      .then((text1) => {
        cy.get("button").contains("Edit").click();
        cy.url().should("contain", "/entry");
        cy.entry();
        cy.wait(100);
        cy.get("p")
          .contains("Description:")
          .invoke("text")
          .then((text2) => expect(text1).not.to.eq(text2));
      });
  });
  it("favorite star favorites entry", () => {
    //? how to see if svg is different? Snapshot testing?
    cy.get(".entry > svg").click();
    cy.get("a[href='/favorite']").click();
    cy.contains("p", "Description:");
    cy.get("a[href='/journal']").click();
  });
  it("delete btn removes entry", () => {
    cy.get("button").contains("Delete").click();
    cy.get("p").contains("Description:").should("not.exist");
    cy.contains("h2", "You don't have any entries...");
  });
});
