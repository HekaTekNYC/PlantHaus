import React from 'react'
import { Link } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.css'
import './site-footer.styles.scss'

const SiteFooter = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <section className="footer-section">
          <div className="footer-grid">
            <div className="footer-column">
              <h6>Plant Haus</h6>
              <p>
                Your friendly plant store. Bringing the beauty of nature into
                your home with a curated collection of houseplants. Discover a
                greener, healthier lifestyle with Plant Haus.
              </p>
            </div>

            <div className="footer-column">
              <h6>Quick Links</h6>
              <ul>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/auth">Sign In</Link>
                </li>
                <li>
                  <Link to="/checkout">Checkout</Link>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h6>Contact</h6>
              <p>
                <i className="fas fa-home" /> Brooklyn, NY 11233, US
              </p>
              <p>
                <i className="fas fa-envelope" /> hekatek@hekateknyc.com
              </p>
              <p>
                <i className="fas fa-phone" /> +01 917 333 6666
              </p>
              <p>
                <i className="fas fa-print" /> +01 917 777 1826
              </p>
            </div>

            <div className="footer-column">
              <h6>Follow us</h6>
              <div className="social-icons">
                <a href="#!">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#!">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#!">
                  <i className="fab fa-google" />
                </a>
                <a href="#!">
                  <i className="fab fa-instagram" />
                </a>
                <a href="#!">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="#!">
                  <i className="fab fa-github" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="footer-bottom">
        <span>
          Website Developed by{' '}
          <a href="https://hekateknyc.com/" target="_blank" rel="noreferrer">
            Hekatek
          </a>
        </span>
        <span className="copyright">© Copyright 2025</span>
      </div>
    </footer>
  )
}

export default SiteFooter
