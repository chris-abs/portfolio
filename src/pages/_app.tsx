import Head from 'next/head'
import '../styles/globals.scss'
import { Montserrat } from 'next/font/google'
import Footer from '@/components/Footer'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
})

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <title>Chris Abbott&pos;s Portfolio</title>
        <meta name="description" content="Creating websites" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${montserrat.variable} font-mont`}>
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  )
}

export default MyApp
