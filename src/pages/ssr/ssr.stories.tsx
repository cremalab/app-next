import { ComponentMeta, Story } from "@storybook/react"
import { ComponentProps } from "react"
import { SSR } from "./index.page"

export default {
  title: "Pages/SSR",
  component: SSR,
} as ComponentMeta<typeof SSR>

const Template: Story<ComponentProps<typeof SSR>> = (args) => <SSR {...args} />

export const Example = Template.bind({})
Example.args = { data: 42 }
