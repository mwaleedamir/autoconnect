import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/addToCartBtnSlice'
import Saved from '../features/savebuttonSlice'

export const store = configureStore({
  reducer: {
    addToCart : cartReducer,
    saved : Saved,
  },
})