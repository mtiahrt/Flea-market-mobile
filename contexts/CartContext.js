import React, { createContext, useState } from 'react';
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [itemDetailIds, setItemDetailIds] = useState([]);
  return (
    <CartContext.Provider
      value={{
        itemDetailIds,
        setItemDetailIds,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
