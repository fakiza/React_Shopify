// CartContext.js
import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
const CartContext = createContext();
const CART_STORAGE_KEY = "cartItems";

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem(CART_STORAGE_KEY);
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  const [totalCartItems, setTotalCartItems] = useState(0);

  useEffect(() => {
    // Calculate the total number of items in the cart
    const totalItems = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setTotalCartItems(totalItems);
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);


  const addToCart = (product) => {
    const existingItem = cartItems.find(
      (item) => item.product.id === product.id
    );

    if (existingItem) {
      // If item is already in the cart, increment quantity
      const updatedCart = cartItems.map((item) =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartItems(updatedCart);
      // postCartToApi(updatedCart);
    } else {
      // If item is not in the cart, add it with quantity 1
      const updatedCart = [...cartItems, { product, quantity: 1 }];
      setCartItems(updatedCart);
      // postCartToApi(updatedCart);
    }
  };

  const incrementQuantity = (product) => {
    const updatedCart = cartItems.map((item) =>
      item.product.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCartItems(updatedCart);
    // postCartToApi(updatedCart);
  };

  const decrementQuantity = (product) => {
    const updatedCart = cartItems.map((item) =>
      item.product.id === product.id
        ? { ...item, quantity: Math.max(1, item.quantity - 1) }
        : item
    );
    setCartItems(updatedCart);
    // postCartToApi(updatedCart);
  };

  const removeItem = (product) => {
    const updatedCart = cartItems.filter(
      (item) => item.product.id !== product.id
    );
    setCartItems(updatedCart);
    // postCartToApi(updatedCart);
  };
  // const postCartToApi = (updatedCart) => {
  //   // Send the updated cart to your API
  //   axios.post('http://localhost:4000/cartItems', { cartItems: updatedCart })
  //     .then((response) => console.log('Cart updated successfully:', response))
  //     .catch((error) => console.error('Error updating cart:', error));
  // };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalCartItems,
        addToCart,
        incrementQuantity,
        decrementQuantity,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
