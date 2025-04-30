import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../../contexts/user.context'
import { signOutUser } from '../../../utils/firebase/firebase.utils'
import { NavbarContext } from '../../../contexts/navbar.context'
import { scrollToTop } from '../../../utils/scrollToTop'
import './dropdown-nav.styles.scss'

const DropdownNav = () => {
  const { currentUser } = useContext(UserContext)
  const { toggleMobileNav } = useContext(NavbarContext)
  const navigate = useNavigate()

  const handleLinkClick = (path) => {
    toggleMobileNav()
    navigate(path)
    scrollToTop()
  }

  return (
    <div className="dropdown-container">
      <Link
        className="nav-link"
        to="/"
        onClick={() => handleLinkClick('/')}
        aria-label="Go to homepage"
      >
        HOME
      </Link>
      <Link
        className="nav-link"
        to="/shop"
        onClick={() => handleLinkClick('/shop')}
        aria-label="Go to shop page"
      >
        SHOP
      </Link>
      <Link
        className="nav-link"
        to="/about"
        onClick={() => handleLinkClick('/about')}
        aria-label="Learn more about us"
      >
        ABOUT
      </Link>
      {currentUser ? (
        <button
          className="nav-link"
          onClick={() => {
            signOutUser()
            handleLinkClick('/')
          }}
          aria-label="Sign out of your account"
        >
          SIGN OUT
        </button>
      ) : (
        <Link
          className="nav-link"
          to="/auth"
          onClick={() => handleLinkClick('/auth')}
          aria-label="Sign in to your account"
        >
          SIGN IN
        </Link>
      )}
    </div>
  )
}

export default DropdownNav
