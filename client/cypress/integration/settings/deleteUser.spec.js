describe("deletes user", () => {
  it("navigates to settings", () => {
    cy.visit("/");
    cy.register();
    cy.get('a[href="/settings"]')
      .contains(/settings/i)
      .click();
    cy.contains("h1", /settings/i);
  });
  it("prompts with confirmation", () => {
    cy.get("button")
      .contains(/delete user/i)
      .click();
    cy.contains("h2", /are you sure?/i);
  });
  it("navigates to login after successful deletion", () => {
    cy.get("button").contains("Yes").click();
    cy.contains("h3", "User successfully deleted.");
  });
});
