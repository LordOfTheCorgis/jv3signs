import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Gallery from './pages/Gallery.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function PageWrapper({ children }) {
  const { pathname } = useLocation()
  useEffect(() => {
    document.body.classList.remove('page-visible')
    const t = setTimeout(() => document.body.classList.add('page-visible'), 20)
    return () => clearTimeout(t)
  }, [pathname])
  return children
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageWrapper>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </PageWrapper>
    </BrowserRouter>
  )
}
