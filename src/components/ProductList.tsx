

import React from 'react'
import { Link } from 'react-router-dom'

import { ProductItem } from '../store/state'
import { add, store } from '../store/index'
import { useSelector } from 'react-redux'


export const ProductList = () => {
  const products = useSelector((state: ProductItem[]) => state)
  const product = products.map((product, i) => {
    return (
      <div key={i} className="col-md-3 col-sm-3 col-xs-12 mb-5">
        <div className={"single-banner " + (product.added ? 'added' : '')}>
          <div className="sb-img">
            <a href="/"><img src={product.thumbnail} alt="" /></a>
          </div>
          <div className="sb-content">
            <div className="d-align">
              <span>{product.subtitle}</span>
              <b>${product.price}</b>
            </div>
            <h3>{product.name}</h3>
            {
              product.added
                ?
                <Link to='/Cart' className="active">View Cart</Link>
                :
                <button onClick={() => store.dispatch(add(product))}>Shop Now</button>
            }
          </div>
        </div>
      </div>
    )
  })
  return (
    <div className="slider-banner pt55 pb-55">
      <div className="container">
        <div className="row">
          <div className="section-title text-center pb30">
            <h1>Special Prodcuts</h1>
            <span></span>
          </div>
          {product}
        </div>
      </div>
    </div>
  )
}
