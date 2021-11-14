import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <h1>Main page</h1>
        menu:
        <Link href='/all-movies'><h2>All movies</h2></Link>
        <Link href='/top-movies'><h2>Top movies</h2></Link>
    </div>
  )
}

export default Home
