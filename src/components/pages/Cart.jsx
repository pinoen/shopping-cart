import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'
import { PRODUCTS } from '../../products'
import CartItem from '../commons/CartItem'

const Cart = () => {
  const { cart, getTotal } = useContext(ShopContext)
  const navigate = useNavigate()

  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>

      <div className='cartItems'>
        {PRODUCTS.map(product => {
          if (cart[product.id] !== 0) {
            return <CartItem data={product} />
          }
        })}
      </div>

      {getTotal() > 0 ?
        <div className='checkout'>
          <p>Subtotal: ${getTotal()}</p>
          <button onClick={() => navigate('/')}> Continue Shopping </button>
          <button> Checkout </button>
        </div> :
        <h1>Your Cart is Empty</h1>
      }
    </div>
  )
}

export default Cart