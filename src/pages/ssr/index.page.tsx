import { GetServerSidePropsContext } from "next"
import Head from "next/head"
import { Nav } from "../../components/Nav/Nav"
import styles from "./SSR.module.css"

export const SSR = ({ data }: { data: number }): JSX.Element => (
  <>
    <Head>
      <title>Crema App Next | SSR</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <main>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Server Side Rendering</h1>
          <p>
            Random number on page generation: <code>{data}</code>
          </p>
          <p>
            Edit <code>src/pages/ssr/index.page.tsx</code> and save to reload.
          </p>
          <a
            className={styles.link}
            href="https://nextjs.org/docs/basic-features/pages#server-side-rendering"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More About SSR
          </a>
        </header>
      </div>
    </main>
  </>
)

/* istanbul ignore next */
export async function getServerSideProps(_props: GetServerSidePropsContext) {
  return {
    props: { data: Math.floor(Math.random() * 100) },
  }
}

export default SSR
