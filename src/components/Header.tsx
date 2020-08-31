import React from 'react'
import { useSelector } from 'react-redux'
import { ProductItem } from '../store/state'
import { store, clear } from '../store/index'
import { Link } from 'react-router-dom'

export const Header = () => {
  const products = useSelector((state: ProductItem[]) => state)
  let totalQ = products.filter(product => product.added).length
  return (
    <header className="buddy-header">
      <div className="main-menu-area">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-sm-9 col-xs-12">
              <nav className="main-menu">
                <ul>
                  <li className="active">
                    <Link to='/'>Home</Link>
                  </li>
                  <li className="active">
                    <Link to='/shop'>Shop</Link>
                  </li>
                  <li className="active">
                    <Link to='/'>About Us</Link>
                  </li>
                  <li className="active">
                    <Link to='/'>Contact Us</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-md-2 col-sm-3 hidden-xs">
              <div className="cart-wishlist">
                <ul>
                  <li>
                    <div className="wish-list-inner">
                      <div className="cart-icon">
                        <i className="fa fa-shopping-cart"> </i>
                        <div className="cart-count text-center">
                          <strong>{totalQ}</strong>
                        </div>
                      </div>
                    </div>
                    {/* Product Basket */}
                    {products.filter(product => product.added).length === 0 ? ' ' :
                      <div className="cart-sub">
                        <div className="all_carts_item">
                          {products.filter(product => product.added).map((product: ProductItem, i) => (
                            <div className="row mini-cart-item ">
                              <a className="cart_list_product_img" href="/">
                                <img alt="04" src={product.thumbnail} className="attachment-shop_thumbnail" />
                              </a>
                              <div className="mini-cart-info">
                                <a className="cart_list_product_title" href="/">{product.subtitle}</a>
                                <div className="cart_list_product_quantity">{product.quantity} x <span className="amount">{product.price * product.quantity}</span></div>
                              </div>
                              <button className="remove-cart" title="Remove this item" onClick={() => store.dispatch(clear(product))}>
                                <i className="fa fa-trash-o"></i>
                              </button>
                            </div>
                          ))}
                          <div className="minicart_total_checkout">
                            Subtotal<span><span className="amount">${products.reduce((total, pro) => total + (pro.price) * pro.quantity, 0)}</span></span>
                          </div>
                          <div className="btn-mini-cart inline-lists">
                            <Link to='/cart' className="button btn-viewcart">View Cart</Link>
                          </div>
                        </div>
                      </div>
                    }
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}