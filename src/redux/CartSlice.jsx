/* oxlint-disable react/only-export-components */
import { createSlice } from '@reduxjs/toolkit'

const initialState = { items: [] }

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const product = action.payload
      if (state.items.some((item) => item.id === product.id)) return
      state.items.push({
        id: product.id,
        name: product.name,
        price: Number(product.price),
        image: product.image,
        quantity: 1,
      })
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload
      const item = state.items.find((entry) => entry.id === id)
      if (item && Number.isFinite(quantity)) {
        item.quantity = Math.max(1, Math.floor(quantity))
      }
    },
    addToCart(state, action) {
      const product = action.payload
      if (state.items.some((item) => item.id === product.id)) return
      state.items.push({
        id: product.id,
        name: product.name,
        price: Number(product.price),
        image: product.image,
        quantity: 1,
      })
    },
    increaseQuantity(state, action) {
      const item = state.items.find((entry) => entry.id === action.payload)
      if (item) item.quantity += 1
    },
    decreaseQuantity(state, action) {
      const item = state.items.find((entry) => entry.id === action.payload)
      if (item && item.quantity > 1) item.quantity -= 1
    },
    removeFromCart(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    clearCart(state) {
      state.items = []
    },
  },
})

export const {
  addItem,
  removeItem,
  updateQuantity,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions
export const selectCartItems = (state) => state.cart.items
export const selectCartCount = (state) =>
  state.cart.items.reduce((count, item) => count + item.quantity, 0)
export const selectCartTotal = (state) =>
  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0)
export default cartSlice.reducer
