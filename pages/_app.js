import Layout from '@/components/layout/Layout'
import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return <>
  <Head>
    <title>Home Page</title>
    <meta name='desctiption' content='this is Home page'></meta>
  </Head>
  <Layout>
  <Component {...pageProps} />
  </Layout>
  </>
}
