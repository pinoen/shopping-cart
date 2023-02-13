import React from 'react'

export const Product = ({ data }) => {
  return (
    <div className='product'>
      <img src={data.productImage} alt='demo' />

      <div className='description'>
        <p><b>{data.productName}</b></p>
        <p>${data.price}</p>
      </div>
      <button className='addToCartBttn'>Add to Cart</button>
    </div>
  )
}
