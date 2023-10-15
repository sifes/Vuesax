import { Header } from '@/components/Header'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Vuesax</title>
        <meta name="description" content="e-commerce task for dev" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Header></Header>
      </main>
    </>
  )
}
