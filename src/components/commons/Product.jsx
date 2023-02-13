import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'

export const Product = ({ data }) => {

  const { addToCart, cart } = useContext(ShopContext)

  const cartAmount = cart[data.id];

  return (
    <div className='product'>
      <img src={data.productImage} alt='demo' />

      <div className='description'>
        <p><b>{data.productName}</b></p>
        <p>${data.price}</p>
      </div>
      <button className='addToCartBttn'
        onClick={() => addToCart(data.id)}

      >Add to Cart {cartAmount > 0 && <>({cartAmount})</>}</button>
    </div>
  )
}
