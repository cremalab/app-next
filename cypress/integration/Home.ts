describe("Home", () => {
  it("Renders correctly as the index route", () => {
    cy.visit("/")

    cy.findAllByText("Welcome").should("exist")

    cy.findByText("Learn about React").should(
      "have.attr",
      "href",
      "https://reactjs.org",
    )

    cy.findByText("Learn about Next.js").should(
      "have.attr",
      "href",
      "https://nextjs.org",
    )
  })
})
