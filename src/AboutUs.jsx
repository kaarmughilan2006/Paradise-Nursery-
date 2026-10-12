import { Link } from 'react-router-dom'
import { FiArrowUpRight, FiHeart, FiSun } from 'react-icons/fi'
import { PiLeaf } from 'react-icons/pi'
import Navbar from './components/Navbar.jsx'
import './AboutUs.css'

function AboutUs() {
  return (
    <>
      <Navbar />
      <main className="about-page">
        <section className="about-hero page-shell">
          <div className="about-copy">
            <p className="eyebrow"><PiLeaf aria-hidden="true" /> Rooted in a greener way of living</p>
            <h1>Helping your home <em>grow</em> happier.</h1>
            <p className="about-lead">At Paradise Nursery, we believe that a little more green can make every day feel brighter. We bring thoughtfully grown plants and practical plant care to homes across India.</p>
            <Link to="/products" className="text-link">Meet your new plant <FiArrowUpRight aria-hidden="true" /></Link>
          </div>
          <div className="about-image-wrap">
            <img src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1100&q=85" alt="A sunlit collection of healthy indoor plants" />
            <span className="image-caption"><FiSun aria-hidden="true" /> Grown with care, delivered with love</span>
          </div>
        </section>

        <section className="about-story page-shell">
          <div className="story-heading">
            <p className="eyebrow">A little about us</p>
            <h2>Our story starts with a single leaf.</h2>
          </div>
          <div className="story-copy">
            <p>Paradise Nursery began with a simple idea: plant ownership should feel joyful, not intimidating. What started as a small collection of much-loved houseplants has grown into a welcoming destination for curious beginners and lifelong plant people alike.</p>
            <p>Today, we carefully choose every plant for its health, character, and ability to thrive in real homes. Our team pairs each one with clear care guidance, so bringing nature inside feels easy from day one.</p>
          </div>
        </section>

        <section className="about-values page-shell" aria-label="Our purpose and values">
          <article className="value-card">
            <span className="value-icon"><FiHeart aria-hidden="true" /></span>
            <p className="eyebrow">Our Mission</p>
            <h2>Make plant care welcoming.</h2>
            <p>We help people create greener, healthier-feeling spaces with thoughtfully selected plants and friendly, dependable guidance.</p>
          </article>
          <article className="value-card value-card-featured">
            <span className="value-icon"><FiSun aria-hidden="true" /></span>
            <p className="eyebrow">Our Vision</p>
            <h2>A greener home in every neighbourhood.</h2>
            <p>We imagine a future where sustainable living is part of everyday life, and every home has room for a little more nature.</p>
          </article>
          <article className="value-card">
            <span className="value-icon"><PiLeaf aria-hidden="true" /></span>
            <p className="eyebrow">Why choose us</p>
            <h2>Healthy plants, honest care.</h2>
            <p>Every plant is selected with care, packed thoughtfully, and supported by practical advice that helps it flourish.</p>
          </article>
        </section>

        <section className="about-commitment page-shell">
          <div>
            <p className="eyebrow">Growing thoughtfully</p>
            <h2>Good for your space. Kinder to the planet.</h2>
          </div>
          <p>Our commitment to healthy plants goes hand in hand with sustainable living. We favour mindful sourcing, careful packaging, and long-lasting greenery—because the best plant is one you can nurture for years.</p>
        </section>
      </main>
    </>
  )
}

export default AboutUs
