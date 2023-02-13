import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import './cartItem.css'

const CartItem = ({ data }) => {

  const { cart, addToCart, removeFromCart, updateManuallyItemCount } = useContext(ShopContext)
  return (
    <div className='cartItem'>
      <img src={data.productImage} alt="demo" />
      <div className='description'>
        <p><b>{data.productName}</b></p>
        <p>${data.price}</p>

        <div className='countHandler'>
          <button onClick={() => removeFromCart(data.id)}>-</button>
          <input value={cart[data.id]}
            onChange={(e) => updateManuallyItemCount(Number(e.target.value), data.id)}
          ></input>
          <button onClick={() => addToCart(data.id)}>+</button>
        </div>
      </div>
    </div>
  )
}

export default CartItem