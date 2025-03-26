import { createContext, useState, useEffect } from 'react'

const CART_STORAGE_KEY = 'cartItems' // 🔹 Define a key for localStorage

const addCartItem = (cartItems, productToAdd, selectedSize) => {
  const existingCartItem = cartItems.find(
    (cartItem) =>
      cartItem.id === productToAdd.id && cartItem.size === selectedSize
  )

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id && cartItem.size === selectedSize
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }

  const selectedPrice = productToAdd.price[selectedSize]
  const selectedThumbnail = productToAdd.thumbnailUrl.thumb1

  return [
    ...cartItems,
    {
      ...productToAdd,
      quantity: 1,
      thumbnailUrl: selectedThumbnail,
      size: selectedSize,
      price: selectedPrice,
    },
  ]
}

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) =>
      cartItem.id === cartItemToRemove.id &&
      cartItem.size === cartItemToRemove.size
  )

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(
      (cartItem) =>
        !(
          cartItem.id === cartItemToRemove.id &&
          cartItem.size === cartItemToRemove.size
        )
    )
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id &&
    cartItem.size === cartItemToRemove.size
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  )
}

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter(
    (cartItem) =>
      cartItem.id !== cartItemToClear.id ||
      cartItem.size !== cartItemToClear.size
  )

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearAllItemsFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
})

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)

  // 🛒 Load cart items from localStorage when the app starts
  useEffect(() => {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY)
    if (storedCart) {
      setCartItems(JSON.parse(storedCart))
    }
  }, [])

  // 💾 Save cart items to localStorage whenever they change
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems))
    } else {
      localStorage.removeItem(CART_STORAGE_KEY) // Remove storage if cart is empty
    }
  }, [cartItems])

  // 🔄 Update cart count when items change
  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    )
    setCartCount(newCartCount)
  }, [cartItems])

  // 💰 Update total price when items change
  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    )
    setCartTotal(newCartTotal)
  }, [cartItems])

  // ✅ Add item to cart
  const addItemToCart = (productToAdd, selectedSize) => {
    setCartItems((prevCartItems) =>
      addCartItem(prevCartItems, productToAdd, selectedSize)
    )
  }

  // 🛑 Remove one quantity from cart
  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems((prevCartItems) =>
      removeCartItem(prevCartItems, cartItemToRemove)
    )
  }

  // ❌ Clear all of a specific item from cart
  const clearAllItemsFromCart = (cartItemToClear) => {
    setCartItems((prevCartItems) =>
      clearCartItem(prevCartItems, cartItemToClear)
    )
  }

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    clearAllItemsFromCart,
    cartItems,
    cartCount,
    cartTotal,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
