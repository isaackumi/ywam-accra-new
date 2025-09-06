import Navigation from '@/components/sections/Navigation'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}