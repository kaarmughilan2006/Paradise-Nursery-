import { useDispatch, useSelector } from 'react-redux'
import { FiCheck, FiPlus } from 'react-icons/fi'
import { PiLeaf } from 'react-icons/pi'
import Navbar from './components/Navbar.jsx'
import { categories, fallbackPlantImage, plants } from './data/plants.js'
import { addItem, selectCartItems } from './redux/CartSlice.jsx'
import './ProductList.css'

const formatRupees = (amount) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount)

function ProductList() {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const cartIds = new Set(cartItems.map((item) => item.id))

  return (
    <>
      <Navbar />
      <main className="catalog-page">
        <section className="catalog-intro page-shell">
          <div>
            <p className="eyebrow"><PiLeaf aria-hidden="true" /> The plant collection</p>
            <h1>Find your kind of <em>green.</em></h1>
            <p>Thoughtfully selected plants for every room, routine, and level of plant confidence.</p>
          </div>
          <div className="catalog-note"><span>18</span><span>happy plants<br />to bring home</span></div>
        </section>

        <div className="catalog-categories page-shell">
          {categories.map((category) => {
            const categoryPlants = plants.filter((plant) => plant.category === category.id)
            return (
              <section className="plant-category" key={category.id} aria-labelledby={`heading-${category.id}`}>
                <div className="category-heading">
                  <div>
                    <p className="eyebrow">{String(categories.indexOf(category) + 1).padStart(2, '0')} / Plant family</p>
                    <h2 id={`heading-${category.id}`}>{category.name}</h2>
                    <p>{category.description}</p>
                  </div>
                  <span className="category-count">{categoryPlants.length} plants</span>
                </div>
                <div className="plant-grid">
                  {categoryPlants.map((plant) => {
                    const isAdded = cartIds.has(plant.id)
                    return (
                      <article className="plant-card" key={plant.id}>
                        <div className="plant-image-wrap">
                          <img
                            src={plant.image}
                            alt={`${plant.name} plant`}
                            loading="lazy"
                            onError={(event) => {
                              event.currentTarget.onerror = null
                              event.currentTarget.src = fallbackPlantImage
                            }}
                          />
                          <span className="plant-category-tag">{category.name.replace(' Plants', '')}</span>
                        </div>
                        <div className="plant-card-body">
                          <div className="plant-title-row">
                            <h3>{plant.name}</h3>
                            <span className="plant-price">{formatRupees(plant.price)}</span>
                          </div>
                          <p className="plant-description">{plant.description}</p>
                          <button
                            className={`add-button${isAdded ? ' added' : ''}`}
                            type="button"
                            disabled={isAdded}
                            onClick={() => dispatch(addItem(plant))}
                            aria-label={isAdded ? `${plant.name} added to cart` : `Add ${plant.name} to cart`}
                          >
                            {isAdded ? <><FiCheck aria-hidden="true" /> Added to Cart</> : <><FiPlus aria-hidden="true" /> Add to Cart</>}
                          </button>
                        </div>
                      </article>
                    )
                  })}
                </div>
              </section>
            )
          })}
        </div>
      </main>
      <footer className="site-footer"><div className="page-shell"><span>Paradise Nursery</span><span>Make room for a little more green.</span></div></footer>
    </>
  )
}

export default ProductList
