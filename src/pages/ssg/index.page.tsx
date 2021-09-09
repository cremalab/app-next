import { GetStaticProps } from "next"
import Head from "next/head"
import { Nav } from "../../components/Nav/Nav"
import styles from "./SSG.module.css"

export const SSG = ({ data }: { data: number }): JSX.Element => (
  <>
    <Head>
      <title>Crema App Next | SSG</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <main>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Static Site Generation</h1>
          <p>
            Random number on page generation: <code>{data}</code>
          </p>
          <p>
            Edit <code>src/pages/ssg/index.page.tsx</code> and save to reload.
          </p>
          <a
            className={styles.link}
            href="https://nextjs.org/docs/basic-features/pages#static-generation-recommended"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More About SSG
          </a>
        </header>
      </div>
    </main>
  </>
)

/* istanbul ignore next */
export async function getStaticProps(_props: GetStaticProps) {
  return {
    props: { data: Math.floor(Math.random() * 100) },
  }
}

export default SSG
