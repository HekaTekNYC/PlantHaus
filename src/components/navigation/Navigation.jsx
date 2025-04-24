import { useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'

import CartIcon from '../../components/cart-icon/cart-icon'
import CartSidebar from '../cart-sidebar/cart-sidebar'
import Burger from './hamburger/Burger'
import DropdownNav from './dropdown-nav/dropdown-nav'
import TopBanner from '../top-banner/TopBanner'

import { UserContext } from '../../contexts/user.context'
import { CartContext } from '../../contexts/cart.context'
import { NavbarContext } from '../../contexts/navbar.context'

import { signOutUser } from '../../utils/firebase/firebase.utils'

import './navigation.styles.scss'

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)
  const { isMobileNavOpen } = useContext(NavbarContext)

  return (
    <>
      <TopBanner />
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div className="logo-short-text">PH</div>
          <div className="nav-store-name">PLANT HAUS</div>
        </Link>
        <div className="right-menu">
          <div className="hamburger-icon">
            <Burger />
          </div>

          <div className="nav-links-container">
            <Link className="nav-links" to="/">
              HOME
            </Link>
            <Link className="nav-links" to="/shop">
              SHOP
            </Link>
            <Link className="nav-links" to="/about">
              ABOUT
            </Link>
            {currentUser ? (
              <span className="nav-links" onClick={signOutUser}>
                SIGN OUT
              </span>
            ) : (
              <Link className="nav-links" to="/auth">
                SIGN IN
              </Link>
            )}
          </div>

          <div className="cart-icon">
            <CartIcon />
          </div>
        </div>
        {isCartOpen && <CartSidebar />}
        {isMobileNavOpen && <DropdownNav />}{' '}
      </div>

      <Outlet />
    </>
  )
}

export default Navigation
