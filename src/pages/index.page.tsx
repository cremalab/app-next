import Head from "next/head"
import { Nav } from "../components/Nav/Nav"
import { Welcome } from "../components/Welcome/Welcome"

export const Home = (): JSX.Element => (
  <div className="container">
    <Head>
      <title>Crema App Next</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <main>
      <Welcome />
    </main>
  </div>
)

export default Home
