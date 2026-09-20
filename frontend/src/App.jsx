import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Businesses from './pages/Businesses.jsx'
import Service from './pages/Service.jsx'
import SupplyChain from './pages/SupplyChain.jsx'
import TechnologyPlatforms from './pages/TechnologyPlatforms.jsx'
import MarketDevelopment from './pages/MarketDevelopment.jsx'
import ServiceDetail from './pages/ServiceDetail.jsx'
import Contact from './pages/Contact.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="site">
      <ScrollToTop />
      <Navbar />
      <main style={{ paddingTop: '80px' }}>
        <Routes>
          {/* Parent company routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/businesses" element={<Businesses />} />
          <Route path="/contact" element={<Contact />} />

          {/* Solutions routes */}
          <Route path="/service" element={<Service />} />
          <Route path="/service/supply-chain" element={<SupplyChain />} />
          <Route path="/service/technology-platforms" element={<TechnologyPlatforms />} />
          <Route path="/service/market-development" element={<MarketDevelopment />} />
          <Route path="/service/:slug" element={<ServiceDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}