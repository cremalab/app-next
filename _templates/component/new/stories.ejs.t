---
to: src/components/<%= name %>/<%= name %>.stories.tsx
---
import { ComponentMeta, Story } from "@storybook/react"
import { ComponentProps } from "react"
import { <%= name %> } from "."

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "Components/<%= name %>",
  component: <%= name %>,
} as ComponentMeta<typeof <%= name %>>

const Template: Story<ComponentProps<typeof <%= name %>>> = (args) => (
  <<%= name %> {...args} />
)

export const Example = Template.bind({})

<% if(withExample) { -%>
Example.args = { name: "<%= name %>" }
<% } else { -%>
Example.args = {}
<% } -%>
