import Head from 'next/head'
import HomeSection from './sections/Home'
import AboutSection from './sections/About'
import PortfolioSection from './sections/Portfolio'
import ContactSection from './sections/Contact'
import NavBar from '@/components/Navbar'
import Modal from '@/components/modal/Modal'

function LandingPage() {
  return (
    <div>
      <Head>
        <title>Chris Abbott&apos;s Portfolio</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Modal isOpen />
        <HomeSection />
        <NavBar />
        <AboutSection />
        <PortfolioSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default LandingPage
