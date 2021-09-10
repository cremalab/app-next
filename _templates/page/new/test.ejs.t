---
to: src/pages/<%= route %>/<%= name %>.test.tsx
sh: npx eslint -c ./.eslintrc.json ./src/pages/<%= route %> --ext .ts,.tsx --fix --quiet
---
import { <%= name %> } from "./index.page"
<% if(!withExample) { -%>

describe("<%= name %>", () => {
  it("is defined", expect(<%= name %>).toBeDefined)

  it.todo(`add meaningful tests 👍`)
})
<% } else if(withExample) { -%>
import { render } from "@testing-library/react"

describe("<%= name %>", () => {
  it("name prop is rendered", () => {
    // Arrange
    const message = "Hi, my name is <%= name %>!"

    // Act
    const { getByText } = render(<<%= name %> name="<%= name %>" />)
    const received = getByText(message)

    // Assert
    expect(received).toBeDefined()
  })
})
<% } -%>