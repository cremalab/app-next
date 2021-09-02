import Head from "next/head"
import { Nav } from "../components/Nav"
import { Welcome } from "../components/Welcome/Welcome"

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Props {}

export const Home = (_: Props): JSX.Element => (
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
