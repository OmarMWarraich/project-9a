import React from 'react'
import { useSelector } from 'react-redux'
import { ProductItem } from '../store/state'
import { store, remove, inc, clear } from '../store/index'

export const Cart = () => {
  const products = useSelector((state: ProductItem[]) => state);
  return (
    <div className="cart-area pt55 pb55 ">
      <div className="container">
        <div className="row">
          {products.filter(product => product.added).length === 0 ? 'Cart is Empty' :
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="table-responsive">
                <table className="shop_table cart table">
                  <thead>
                    <tr>
                      <th className="product-remove"></th>
                      <th className="product-thumbnail">Image</th>
                      <th className="product-name">Product</th>
                      <th className="product-price">Price</th>
                      <th className="product-quantity">Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.filter(product => product.added).map((product: ProductItem, i) => (
                      <tr className="cart_item">
                        <td className="remove">
                          <button className="remove-cart" title="Remove this item" onClick={() => store.dispatch(clear(product))}>
                            <i className="fa fa-trash-o"></i>
                          </button>
                        </td>
                        <td className="item-img">
                          <img src={product.thumbnail} alt="" />
                        </td>
                        <td className="item-title"> {product.name}</td>
                        <td className="item-price">{product.quantity} x ${product.price} = ${product.quantity * product.price}</td>
                        <td className="item-qty">
                          ({product.quantity})
                          <br />
                          <button className='cart-button' onClick={() => store.dispatch(inc(product))}>+</button>
                          <button className='cart-button' onClick={() => store.dispatch(remove(product))}>-</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="total-cart-wrap pt30">
                <div className="section-title text-center pt40">
                  <h3>Cart Totals</h3>
                </div>
                <div className="table-responsive">
                  <table className="cart-total-area table">
                    <tbody>
                      <tr className="cart_item">
                        <td className="ctg-type"> Sub-Total</td>
                        <td className="cgt-des"> ${products.reduce((total, pro) => total + (pro.price) * pro.quantity, 0)} </td>
                      </tr>
                      <tr className="cart_item">
                        <td className="ctg-type"> Total</td>
                        <td className="cgt-des"> ${products.reduce((total, pro) => total + (pro.price) * pro.quantity, 0)} </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}
