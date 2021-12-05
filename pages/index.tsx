import type { NextPage } from 'next'
import Link from 'next/link'
import {Layout} from "../components/layout/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <h1>Main page</h1>
        menu:
        <Link href='/comedies' passHref><h2>Comedies</h2></Link>
        <Link href='/top-movies' passHref><h2>Top movies</h2></Link>
    </Layout>
  )
}

export default Home
