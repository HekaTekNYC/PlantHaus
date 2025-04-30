import { useContext, Suspense, lazy } from 'react'
import { Outlet, Link } from 'react-router-dom'

import CartIcon from '../../components/cart-icon/cart-icon'
import { UserContext } from '../../contexts/user.context'
import { CartContext } from '../../contexts/cart.context'
import { NavbarContext } from '../../contexts/navbar.context'

import { signOutUser } from '../../utils/firebase/firebase.utils'

import './navigation.styles.scss'

const CartSidebar = lazy(() => import('../cart-sidebar/cart-sidebar'))
const DropdownNav = lazy(() => import('./dropdown-nav/dropdown-nav'))
const Burger = lazy(() => import('./hamburger/Burger'))
const TopBanner = lazy(() => import('../top-banner/TopBanner'))

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)
  const { isMobileNavOpen } = useContext(NavbarContext)

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <TopBanner />
      </Suspense>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div className="logo-short-text">PH</div>
          <div className="nav-store-name">PLANT HAUS</div>
        </Link>

        <div className="right-menu">
          <div className="hamburger-icon">
            <Suspense fallback={<div>Loading Menu...</div>}>
              <Burger />
            </Suspense>
          </div>

          <nav className="nav-links-container">
            <Link className="nav-links" to="/" aria-label="Go to home page">
              HOME
            </Link>
            <Link className="nav-links" to="/shop" aria-label="Go to shop page">
              SHOP
            </Link>
            <Link
              className="nav-links"
              to="/about"
              aria-label="Learn more about us"
            >
              ABOUT
            </Link>
            {currentUser ? (
              <button
                className="nav-links"
                onClick={signOutUser}
                aria-label="Sign out of the account"
              >
                SIGN OUT
              </button>
            ) : (
              <Link
                className="nav-links"
                to="/auth"
                aria-label="Sign in to your account"
              >
                SIGN IN
              </Link>
            )}
          </nav>

          <div className="cart-icon">
            <CartIcon />
          </div>
        </div>

        {isCartOpen && (
          <Suspense fallback={<div>Loading Cart...</div>}>
            <CartSidebar />
          </Suspense>
        )}

        {isMobileNavOpen && (
          <Suspense fallback={<div>Loading Navigation...</div>}>
            <DropdownNav />
          </Suspense>
        )}
      </div>

      <Outlet />
    </>
  )
}

export default Navigation
