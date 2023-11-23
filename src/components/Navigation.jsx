import { Outlet, Link } from 'react-router-dom'
import Logo from '../assets/plant-haus-new.png'
import './navigation.styles.scss'

const Navigation = () => {
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
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation
