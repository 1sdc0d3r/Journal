describe("NavBar", () => {
  it("navigates to /", () => {
    cy.visit("/");
    cy.loginWith("jackBarry", "password");
    cy.get('a[href="/"]').contains("Dashboard").click();
    cy.contains("h2", /dashboard/i);
  });
  it("navigates to /Journal", () => {
    cy.get('a[href="/journal"]').contains("Journal").click();
    cy.contains("h1", /journal/i);
  });
  it("navigates to /favorite", () => {
    cy.get('a[href="/favorite"]')
      .contains(/favorite/i)
      .click();
    cy.contains("h1", /favorite/i);
  });
  it("navigates to /entry", () => {
    cy.get('a[href="/entry"]').contains(/entry/i).click();
    cy.contains("h1", /entry/i);
  });
  it("navigates to /settings", () => {
    cy.get('a[href="/settings"]')
      .contains(/settings/i)
      .click();
    cy.contains("h1", /settings/i);
  });
  it("navigates to /login on logout", () => {
    cy.get('a[href="/login"]')
      .contains(/logout/i)
      .click();
    cy.contains("button", /login/i);
  });
});
