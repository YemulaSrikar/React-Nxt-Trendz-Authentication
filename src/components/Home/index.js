// Write your JS code here

import './index.css'

const Home = () => (
  <div className="clothes-image-container">
    <div className="desc-container">
      <div className="icons-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
          alt="home"
          className="icons"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
          alt="products"
          className="icons"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
          alt="nav cart"
          className="icons"
        />
      </div>
      <h1 className="clothes-heading">Clothes That Get YOU Noticed</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
        className="clothes-images"
      />

      <p className="clothes-desc">
        Fashion is part of the daily air and it does not quite help that it
        changes all the time.Clothes always have been a marker of the era and we
        are in a Revolution.Your fashion makes you been seen.and heared that way
        you are.So,celebrate the seasons new and exciting fashion in your own
        way.
      </p>
      <button type="button" className="shop-button">
        Shop Now
      </button>
    </div>
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
      alt="clothes that get you noticed"
      className="clothes-image"
    />
  </div>
)
export default Home
