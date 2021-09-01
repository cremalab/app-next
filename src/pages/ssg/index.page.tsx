import { GetStaticProps } from "next"
import Head from "next/head"
import { Nav } from "../../components/Nav/Nav"

export const SSG = ({ data }: { data: number }): JSX.Element => (
  <div className="container">
    <Head>
      <title>Crema App Next | SSG</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <main>
      <div className="SSG">
        <header className="SSG-header">
          <h1 className="Welcome-h1">Static Site Generation</h1>
          <p>
            Random number on page generation: <code>{data}</code>
          </p>
          <p>
            Edit <code>src/pages/ssg/index.page.tsx</code> and save to reload.
          </p>
          <a
            className="SSG-link"
            href="https://nextjs.org/docs/basic-features/pages#static-generation-recommended"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More About SSG
          </a>
        </header>
      </div>
      <style jsx>{`
        .SSG {
          text-align: center;
        }

        .SSG-header {
          background-color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: calc(10px + 2vmin);
          color: #464855;
        }

        .SSG-link {
          color: #ff4858;
        }
      `}</style>
    </main>
  </div>
)

export async function getStaticProps(_props: GetStaticProps) {
  return {
    props: { data: Math.floor(Math.random() * 100) },
  }
}

export default SSG
