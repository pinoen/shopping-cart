import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../products'

export const ShopContext = createContext()

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = ({ children }) => {

  const [cart, setCart] = useState(getDefaultCart)

  const addToCart = (id) => {
    setCart((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const removeFromCart = (id) => {
    setCart((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  };

  const data = {
    cart,
    setCart,
    addToCart,
    removeFromCart
  }

  return (
    <ShopContext.Provider value={data}>
      {children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider