// Write your JS code here
import {Link} from 'react-router-dom'

import Home from '../Home'

import './index.css'

const Header = () => (
  <>
    <div className="box-container">
      <nav className="nav-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="nav-nxt-trendz-logo"
          />
        </div>
        <div className="nav-links-container">
          <ul className="nav-u-list-container">
            <Link to="/" className="links">
              <li>Home</li>
            </Link>
            <Link to="/products" className="links">
              <li>Products</li>
            </Link>
            <Link to="/cart" className="links">
              <li>Cart</li>
            </Link>
            <Link to="/logout" className="logout-link">
              <li className="logout">Logout</li>
            </Link>
          </ul>
        </div>
      </nav>
      <Home />
    </div>
  </>
)
export default Header
