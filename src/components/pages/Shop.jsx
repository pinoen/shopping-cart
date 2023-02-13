import React from 'react'
import { PRODUCTS } from '../../products'
import { Product } from '../commons/Product'
import './shop.css'

const Shop = () => {
  return (
    <div className='shop'>
      <div className='shopTitle'>
        <h1> PINOEN Shop</h1>
      </div>

      <div className='products'>
        {PRODUCTS.map(product => (
          <Product data={product} />
        ))}

      </div>
    </div>
  )
}

export default Shop