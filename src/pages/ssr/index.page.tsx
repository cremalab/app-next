import { GetServerSidePropsContext } from "next"
import Head from "next/head"
import { Nav } from "../../components/Nav/Nav"

export const SSR = ({ data }: { data: number }): JSX.Element => (
  <div className="container">
    <Head>
      <title>Crema App Next | SSR</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <main>
      <div className="SSR">
        <header className="SSR-header">
          <h1 className="Welcome-h1">Server Side Rendering</h1>
          <p>
            Random number on page generation: <code>{data}</code>
          </p>
          <p>
            Edit <code>src/pages/ssr/index.page.tsx</code> and save to reload.
          </p>
          <a
            className="SSR-link"
            href="https://nextjs.org/docs/basic-features/pages#server-side-rendering"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More About SSR
          </a>
        </header>
      </div>
      <style jsx>{`
        .SSR {
          text-align: center;
        }

        .SSR-header {
          background-color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: calc(10px + 2vmin);
          color: #464855;
        }

        .SSR-link {
          color: #ff4858;
        }
      `}</style>
    </main>
  </div>
)

export async function getServerSideProps(_props: GetServerSidePropsContext) {
  return {
    props: { data: Math.floor(Math.random() * 100) },
  }
}

export default SSR
