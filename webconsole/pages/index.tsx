import type { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <img src="/PyJailBreak/PyJailBreak.png" alt="title logo" />
      <Link href="/openapi"><a>API</a></Link>
    </Layout>
  )
}

export default Home
