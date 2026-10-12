import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FiArrowLeft, FiMinus, FiPlus, FiShoppingBag, FiTrash2 } from 'react-icons/fi'
import Navbar from './components/Navbar.jsx'
import { fallbackPlantImage } from './data/plants.js'
import { removeItem, selectCartItems, selectCartTotal, updateQuantity } from './redux/CartSlice.jsx'
import './CartItem.css'

const formatRupees = (amount) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount)

function CartItem() {
  const dispatch = useDispatch()
  const items = useSelector(selectCartItems)
  const total = useSelector(selectCartTotal)
  const [checkoutMessage, setCheckoutMessage] = useState('')

  return (
    <>
      <Navbar />
      <main className="cart-page page-shell">
        <div className="cart-heading">
          <div>
            <p className="eyebrow"><FiShoppingBag aria-hidden="true" /> Your little green corner</p>
            <h1>Shopping cart</h1>
          </div>
          <Link className="back-to-shop" to="/products"><FiArrowLeft aria-hidden="true" /> Continue shopping</Link>
        </div>

        {items.length === 0 ? (
          <section className="empty-cart" aria-live="polite">
            <span className="empty-cart-icon"><FiShoppingBag aria-hidden="true" /></span>
            <h2>Your shopping cart is empty.</h2>
            <p>There are plenty of lovely leaves waiting to find a home.</p>
            <Link className="primary-link-button" to="/products">Explore the plants</Link>
          </section>
        ) : (
          <div className="cart-layout">
            <section className="cart-items-list" aria-label="Products in your cart">
              <div className="cart-list-heading"><span>Plant</span><span>Quantity</span><span>Total</span></div>
              {items.map((item) => (
                <article className="cart-item-row" key={item.id}>
                  <div className="cart-product">
                    <img
                      src={item.image}
                      alt={`${item.name} plant`}
                      onError={(event) => {
                        event.currentTarget.onerror = null
                        event.currentTarget.src = fallbackPlantImage
                      }}
                    />
                    <div>
                      <h2>{item.name}</h2>
                      <p>Unit price · {formatRupees(item.price)}</p>
                      <button className="remove-button" type="button" onClick={() => dispatch(removeItem(item.id))} aria-label={`Remove ${item.name} from cart`}>
                        <FiTrash2 aria-hidden="true" /> Remove
                      </button>
                    </div>
                  </div>
                  <div className="quantity-control" aria-label={`${item.name} quantity`}>
                    <button type="button" aria-label={`Decrease ${item.name} quantity`} onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}><FiMinus aria-hidden="true" /></button>
                    <span aria-live="polite">{item.quantity}</span>
                    <button type="button" aria-label={`Increase ${item.name} quantity`} onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}><FiPlus aria-hidden="true" /></button>
                  </div>
                  <strong className="item-total">{formatRupees(item.price * item.quantity)}</strong>
                </article>
              ))}
            </section>

            <aside className="order-summary" aria-label="Order summary">
              <p className="eyebrow">Your order</p>
              <h2>Order summary</h2>
              <div className="summary-line"><span>Plants ({items.reduce((count, item) => count + item.quantity, 0)} items)</span><span>{formatRupees(total)}</span></div>
              <div className="summary-line"><span>Delivery</span><span className="free-delivery">Free</span></div>
              <div className="summary-total"><span>Total</span><strong>{formatRupees(total)}</strong></div>
              <button className="checkout-button" type="button" onClick={() => setCheckoutMessage('Coming Soon! Checkout functionality will be available in a future update.')}>Continue to checkout</button>
              {checkoutMessage && <p className="checkout-message" role="status">{checkoutMessage}</p>}
              <p className="secure-note">A little green joy, delivered with care.</p>
            </aside>
          </div>
        )}
      </main>
    </>
  )
}

export default CartItem
