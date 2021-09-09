import React from "react"
import { render } from "../../utils/testUtils"
import { Welcome } from "."

describe("Welcome", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<Welcome />, {})
    expect(asFragment()).toMatchSnapshot()
  })

  it("has the expected links", () => {
    const { getByText } = render(<Welcome />, {})
    expect(getByText("Learn about React")).toHaveAttribute(
      "href",
      "https://reactjs.org",
    )
    expect(getByText("Learn about Next.js")).toHaveAttribute(
      "href",
      "https://nextjs.org",
    )
  })
})
