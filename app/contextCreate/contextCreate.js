"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // Load cart from local storage on component mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);

    setCart(storedCart);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const saveCartToLocalStorage = (newCart) => {
    localStorage.setItem("cart", JSON.stringify(newCart));
  };
  const saveWishlistToLocalStorage = (newWishlist) => {
    localStorage.setItem("wishlist", JSON.stringify(newWishlist));
  };

  // const addToCart = (item) => {
  //   setCart((prevCart) => {
  //     const newCart = [...prevCart, item];
  //     saveCartToLocalStorage(newCart);
  //     return newCart;
  //   });
  // };

  // const addToWishlist = (item) => {
  //   setWishlist((prevCart) => {
  //     const newWishlist = [...prevCart, item];
  //     saveWishlistToLocalStorage(newWishlist);
  //     return newWishlist;
  //   });
  // };

  const removeFromWishlist = (productId) => {
    setWishlist((prevCart) => {
      const newWishlist = prevCart.filter(
        (product) => product.id !== productId
      );
      saveWishlistToLocalStorage(newWishlist);
      return newWishlist;
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const newCart = prevCart.filter((product) => product.id !== productId);
      saveCartToLocalStorage(newCart);
      return newCart;
    });
  };

  const clearCart = () => {
    setCart([]);
    saveCartToLocalStorage([]);
  };

  const clearWishlist = () => {
    setWishlist([]);
    saveWishlistToLocalStorage([]);
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((p) => p.id === product.id);
      if (existingProduct) {
        // Increment quantity if the product is already in the cart
        existingProduct.quantity += 1;
      } else {
        // Add a new product with quantity 1 to the cart
        prevCart = [...prevCart, { ...product, quantity: 1 }];
      }
      saveCartToLocalStorage(prevCart);
      return prevCart;
    });
  };
  const addToWishlist = (product) => {
    setWishlist((prevCart) => {
      const existingProduct = prevCart.find((p) => p.id === product.id);
      if (existingProduct) {
        // Increment quantity if the product is already in the cart
        existingProduct.quantity += 1;
      } else {
        // Add a new product with quantity 1 to the cart
        prevCart = [...prevCart, { ...product, quantity: 1 }];
      }
      saveWishlistToLocalStorage(prevCart);
      return prevCart;
    });
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        wishlist,
        addToWishlist,
        removeFromWishlist,
        clearCart,
        clearWishlist,
        calculateTotalPrice,
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
