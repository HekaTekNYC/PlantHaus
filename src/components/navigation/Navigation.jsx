import { useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'

import CartIcon from '../../components/cart-icon/cart-icon'
import CartSidebar from '../cart-sidebar/cart-sidebar'

import { UserContext } from '../../contexts/user.context'
import { CartContext } from '../../contexts/cart.context'

import Logo from '../../assets/plant-haus-new.png'
import { signOutUser } from '../../utils/firebase/firebase.utils'

import './navigation.styles.scss'

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img className="logo" src={Logo} alt="Plant Haus Logo" />
          <div className="logo-text"></div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-links" to="/shop">
            SHOP
          </Link>
          <Link className="nav-links" to="/about">
            ABOUT
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-links" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>

        {isCartOpen && <CartSidebar />}
      </div>
      <Outlet />
    </>
  )
}

export default Navigation
