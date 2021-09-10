---
to: src/components/<%= name %>/<%= name %>.tsx
---
<% if(!withExample) { -%>
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Props {}

export function <%= name %>(_: Props) {
  return <></>
}
<% } else if(useState) { -%>
import { useState } from "react"

export interface Props {
  name: string
}

export function <%= name %>({ name }: Props) {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Hi, my name is {name}!</p>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  )
}
<% } else { -%>
export interface Props {
  name: string
}

export function <%= name %>({ name }: Props) {
  return (
    <div>
      <p>Hi, my name is {name}!</p>
    </div>
  )
}
<% } -%>
