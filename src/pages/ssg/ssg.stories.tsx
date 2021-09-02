import { ComponentMeta, Story } from "@storybook/react"
import { ComponentProps } from "react"
import { SSG } from "./index.page"

export default {
  title: "Pages/SSG",
  component: SSG,
} as ComponentMeta<typeof SSG>

const Template: Story<ComponentProps<typeof SSG>> = (args) => <SSG {...args} />

export const Example = Template.bind({})
Example.args = { data: 42 }
