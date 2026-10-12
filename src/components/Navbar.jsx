import { NavLink } from 'react-router-dom'
import { FiShoppingBag, FiMenu, FiX } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { selectCartCount } from '../redux/CartSlice.jsx'
import './Navbar.css'

function Navbar() {
  const count = useSelector(selectCartCount)
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <nav className="navbar page-shell" aria-label="Main navigation">
        <NavLink className="brand" to="/" onClick={closeMenu} aria-label="Paradise Nursery home">
          <span className="brand-mark" aria-hidden="true">P</span>
          <span>Paradise <strong>Nursery</strong></span>
        </NavLink>
        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
        <div className={`nav-links${menuOpen ? ' nav-links-open' : ''}`}>
          <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
          <NavLink to="/products" onClick={closeMenu} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Plants</NavLink>
          <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About</NavLink>
          <NavLink to="/cart" onClick={closeMenu} className={({ isActive }) => isActive ? 'nav-cart active' : 'nav-cart'} aria-label={`Shopping cart, ${count} items`}>
            <FiShoppingBag aria-hidden="true" />
            <span>Cart</span>
            <span className="cart-badge" aria-live="polite">{count}</span>
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
