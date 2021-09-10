---
to: src/pages/<%= route %>/<%= name %>.stories.tsx
---
import { ComponentMeta, Story } from "@storybook/react"
import { ComponentProps } from "react"
import { <%= name %> } from "./index.page"

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "Pages/<%= name %>",
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
