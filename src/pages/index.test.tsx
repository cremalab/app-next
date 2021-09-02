import React from "react"
import { render } from "../utils/testUtils"
import { Home } from "./index.page"

describe("Home page", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<Home />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
