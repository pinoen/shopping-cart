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

  const updateManuallyItemCount = (newAmount, id) => {
    setCart((prev) => ({ ...prev, [id]: newAmount }));
  }

  const getTotal = () => {
    let totalAmount = 0;
    for (const item in cart) {
      if (cart[item] > 0) {
        let data = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cart[item] * data.price;
      }
    }
    return totalAmount;
  };

  const data = {
    cart,
    setCart,
    addToCart,
    removeFromCart,
    updateManuallyItemCount,
    getTotal
  }

  return (
    <ShopContext.Provider value={data}>
      {children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider