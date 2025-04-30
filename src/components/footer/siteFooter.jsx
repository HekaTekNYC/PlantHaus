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
              <h4>Plant Haus</h4>
              <p>
                Your friendly plant store. Bringing the beauty of nature into
                your home with a curated collection of houseplants. Discover a
                greener, healthier lifestyle with Plant Haus.
              </p>
            </div>
            <div
              className="footer-column"
              role="navigation"
              aria-label="Quick Links"
            >
              <h4 id="quick-links-heading">Quick Links</h4>
              <ul aria-labelledby="quick-links-heading">
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
              <h4>Contact</h4>
              <address className="footer-contact">
                <p>
                  <i className="fas fa-home" aria-hidden="true"></i>
                  <span className="sr-only">Address:</span>
                  Brooklyn, NY 11233, US
                </p>
                <p>
                  <i className="fas fa-envelope" aria-hidden="true"></i>
                  <span className="sr-only">Email:</span>
                  <a href="mailto:hekatek@hekateknyc.com">
                    hekatek@hekateknyc.com
                  </a>
                </p>
                <p>
                  <i className="fas fa-phone" aria-hidden="true"></i>
                  <span className="sr-only">Phone:</span>
                  <a href="tel:+19173336666">+01 917 333 6666</a>
                </p>
                <p>
                  <i className="fas fa-print" aria-hidden="true"></i>
                  <span className="sr-only">Fax:</span>
                  +01 917 777 1826
                </p>
              </address>
            </div>

            <div className="footer-column">
              <h4>Follow us</h4>
              <div className="social-icons">
                <a
                  href="#facebook"
                  aria-label="Facebook"
                  rel="noopener"
                  target="_blank"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  href="#twitter"
                  aria-label="Twitter"
                  rel="noopener"
                  target="_blank"
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  href="#google"
                  aria-label="Google"
                  rel="noopener"
                  target="_blank"
                >
                  <i className="fab fa-google" />
                </a>
                <a
                  href="#instagram"
                  aria-label="Instagram"
                  rel="noopener"
                  target="_blank"
                >
                  <i className="fab fa-instagram" />
                </a>
                <a
                  href="#linkedin"
                  aria-label="LinkedIn"
                  rel="noopener"
                  target="_blank"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
                <a
                  href="#github"
                  aria-label="GitHub"
                  rel="noopener"
                  target="_blank"
                >
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
          <a
            href="https://hekateknyc.com/"
            target="_blank"
            aria-label="Visit the Hekatek website (opens in a new tab)"
            rel="noreferrer"
          >
            Hekatek
          </a>
        </span>
        <span className="copyright">© Copyright 2025</span>
      </div>
    </footer>
  )
}

export default SiteFooter
