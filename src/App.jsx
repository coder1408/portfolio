import Background from './components/Background'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BentoShowcase from './components/BentoShowcase'
import Timeline from './components/Timeline'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="grain relative min-h-screen text-ink">
      <Background />
      <Navbar />
      <main>
        <Hero />
        <BentoShowcase />
        <Timeline />
        <Footer />
      </main>
    </div>
  )
}
