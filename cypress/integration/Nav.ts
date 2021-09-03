describe("Nav", () => {
  it("Renders correctly", () => {
    cy.visit("/")

    cy.get("nav").findByText("Welcome").should("have.attr", "href", "/")
    cy.get("nav").findByText("SSR").should("have.attr", "href", "/ssr")
    cy.get("nav").findByText("SSG").should("have.attr", "href", "/ssg")
  })
})
