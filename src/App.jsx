import { Link, Route, Routes } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { PiLeaf } from 'react-icons/pi'
import { useSelector } from 'react-redux'
import { selectCartCount } from './redux/CartSlice.jsx'
import AboutUs from './AboutUs.jsx'
import ProductList from './ProductList.jsx'
import CartItem from './CartItem.jsx'
import './App.css'

function LandingPage() {
  const cartCount = useSelector(selectCartCount)

  return (
    <main className="landing-hero">
      <header className="landing-header page-shell">
        <Link className="landing-brand" to="/" aria-label="Paradise Nursery home">
          <span className="brand-mark" aria-hidden="true">P</span>
          <span>Paradise <strong>Nursery</strong></span>
        </Link>
        <nav className="landing-nav" aria-label="Landing page navigation">
          <Link to="/about">Our story</Link>
          <Link to="/products">Explore plants</Link>
          <Link className="landing-cart-link" to="/cart">Cart <span>{cartCount}</span></Link>
        </nav>
      </header>
      <section className="landing-content page-shell">
        <p className="landing-kicker"><PiLeaf aria-hidden="true" /> A little closer to nature</p>
        <h1>Bring Nature<br />Into Your <em>Home</em></h1>
        <p className="landing-description">Beautiful indoor and outdoor plants for homes, offices, and gardens. Find your next favourite green companion at Paradise Nursery.</p>
        <Link className="get-started-button" to="/products">Get Started <FiArrowRight aria-hidden="true" /></Link>
        <span className="landing-footnote">GROW SLOW. LIVE WELL.</span>
      </section>
    </main>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
      <Route path="*" element={<LandingPage />} />
    </Routes>
  )
}

export default App
