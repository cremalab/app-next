---
to: src/pages/<%= route %>/index.page.tsx
---
<% if(getServerSideProps) { -%>
import { GetServerSidePropsContext } from "next"
<% } else if(getStaticProps) { -%>
import { GetStaticProps } from "next"
<% } -%>
import Head from "next/head"

<% if(!withExample) { -%>
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Props {}

export function <%= name %>(_: Props) {
  return (
    <>
      <Head>
        <title>Crema App Next | <%= name %></title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <></>
      </main>
    </>
  )
}
<% } else { -%>
export interface Props {
  name: string
}

export function <%= name %>({ name }: Props) {
  return (
    <>
      <Head>
        <title>Crema App Next | <%= name %></title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <>{name}</>
      </main>
    </>
  )
}
<% } -%>

<% if(getServerSideProps) { -%>
/* istanbul ignore next */
export async function getServerSideProps(_props: GetServerSidePropsContext) {
  return {
    props: { name: "<%= name %>" },
  }
}
<% } else if(getStaticProps) { -%>
/* istanbul ignore next */
export async function getStaticProps(_props: GetStaticProps) {
  return {
    props: { name: "<%= name %>" },
  }
}
<% } -%>

export default <%= name %>