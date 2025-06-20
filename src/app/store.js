import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/addToCartBtnSlice'
import Saved from '../features/savebuttonSlice'
import { userDetailsReducer } from "../features/userSignupSlice";
import { ownerDetailsReducer } from "../features/userSignupSlice";

export const store = configureStore({
  reducer: {
    addToCart : cartReducer,
    saved : Saved,
    userDetails : userDetailsReducer,
    ownerDetails : ownerDetailsReducer,
  },
})  