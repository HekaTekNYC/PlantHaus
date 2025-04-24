import Button from '../../components/button/main-button/Button'
import { Link } from 'react-router-dom'

import './about.styles.scss'

const About = () => {
  const missionData = [
    {
      imgSrc: '/icons/plant-1.svg',
      altText: 'plant pot 1',
      description:
        'Thoughtfully chosen, easy-to-care-for plants that fit real life and real routines.',
      class: 'plant-1',
    },
    {
      imgSrc: '/icons/plant-2.svg',
      altText: 'plant pot 2',
      description:
        'Guidance and gentle check-ins to help your space thrive with confidence.',
      class: 'plant-2',
    },
    {
      imgSrc: '/icons/plant-3.svg',
      altText: 'plant pot 3',
      description:
        'Simple routines — a little water, a little light, and a whole lot of care.',
      class: 'plant-3',
    },
  ]
  return (
    <>
      <div className="about-container">
        <div className="about-header-container">
          <div className="about-header">
            <img
              src="/images/monstera-light.png"
              alt="light green monstera leaf"
              className="about-monstera"
            />
            <img
              src="/images/leaf-light.png"
              alt="light green leaf"
              className="about-leaf-md"
            />
            <img
              src="/images/leaf-dark.png"
              alt="light green leaf"
              className="about-leaf-dark"
            />

            <h2>Small Team, Big Impact</h2>
            <p>
              We started with a lot of love (and a little trial and error). Now
              we help your space get a whole lot greener — and happier.
            </p>
          </div>
        </div>

        <div className="about-us-content-container">
          <div className="about-us-container">
            <div className="our-shop-img">
              <picture>
                <source srcSet="/images/ph-5.webp" type="image/webp" />
                <img src="/images/ph-5.png" alt="Inside the plant shop" />
              </picture>
            </div>
            <div className="about-us-info">
              <h3>Rooted in Brooklyn</h3>
              <p>
                Our little plant shop started out with a big dream: bring a bit
                of calm and a lot of green into city living. What began as a
                love for plants quickly grew into a space where people could
                slow down, breathe deep, and find the perfect leafy companion.
                We handpick every plant, making sure it’s not just beautiful —
                but resilient, ready to thrive in real homes, with real people.
              </p>
            </div>
          </div>

          <div className="mission-section">
            <div className="mission-img">
              <picture>
                <source srcSet="/images/ph-water.webp" type="image/webp" />
                <img src="/images/ph-water.png" alt="Watering plant" />
              </picture>
            </div>
            <div className="mission-statement">
              <div className="mission-header">
                <h3>Planted with purpose</h3>
                <p>
                  We believe in growing with intention. From the plants we
                  select to the way we support our community, every detail is
                  chosen with care. Whether you're just starting your plant
                  journey or looking to deepen your connection, we're here to
                  guide, cheer, and grow with you.
                </p>
              </div>
              <div className="mission-container">
                {missionData.map((item, index) => (
                  <div key={index} className="mission-item">
                    <div className={`${item.class} mission-icon`}>
                      <img src={item.imgSrc} alt={item.altText} />
                    </div>
                    <p className="mission-text">{item.description}</p>
                  </div>
                ))}
              </div>
              <p className="mission-extend">
                Plants aren’t just decorations — they’re living reminders of
                care, patience, and growth. And we’re not just here to sell you
                a product — we’re here to offer insight, encouragement, and the
                kind of support that helps you feel confident as a plant
                caretaker.
              </p>
            </div>
          </div>

          <div className="about-cta">
            <img
              src="/images/monstera-ash.png"
              alt="monstera leaf"
              className="cta-monstera"
            />
            <img
              src="/images/palm-apricot.png"
              alt="palm leaf"
              className="cta-palm"
            />
            <h3>Let’s Grow Together</h3>
            <Link to="/shop">
              <Button buttonType="outlined">Shop Now</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
