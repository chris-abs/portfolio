import Head from 'next/head'
import HomeSection from './sections/Home'
import AboutSection from './sections/About'
import PortfolioSection from './sections/Portfolio'
import ContactSection from './sections/Contact'
import NavBar from '@/components/Navbar'
import ProjectModal from '@/components/modal/QuibblerModal'
import MPModal from '@/components/modal/MPModal'
import WebspirationModal from '@/components/modal/WebspirationModal'
import QuibblerModal from '@/components/modal/QuibblerModal'

function LandingPage() {
  return (
    <div>
      <Head>
        <title>Chris Abbott&apos;s Portfolio</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <QuibblerModal />
        <MPModal />
        <WebspirationModal />
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
