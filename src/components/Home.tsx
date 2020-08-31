import React from 'react'
import { Link } from 'react-router-dom'

// C
import { ProductList } from './ProductList';

// Images
import slide01 from '../assets/img/slider/01.jpg'

export const Home = () => {
  return (
    <div className="homePage">
      <div className="slider-container">
        <div id="mainSlider" className="nivoSlider slider-image">
          <img src={slide01} alt="main slider" title="#htmlcaption1" />
        </div>
        <div id="htmlcaption1" className="nivo-html-caption slider-caption-1">
          <div className="slide1-text">
            <div className="middle-text">
              <div className="cap-dec wow bounceInDown">
                <h3>Trendy Sprint collection In This Time</h3>
              </div>
              <div className="cap-title wow bounceInRight">
                <h1>Exclusive Collection For Women</h1>
              </div>
              <div className="cap-readmore wow bounceInUp">
                <Link to="/shop">shop now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductList />
    </div>
  )
}