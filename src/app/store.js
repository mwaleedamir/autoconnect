import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/addToCartBtnSlice'
import Saved from '../features/savebuttonSlice'
import { ownerDetailsReducer, userDetailsReducer } from "../features/userSignupSlice";
import { ownerAuthReducer, userAuthReducer } from '../features/userLoginSlice';
import { createListingsReducer } from '../features/createListingsSlice';
import { chatBotReducer } from '../features/chatBotSlice';


export const store = configureStore({
  reducer: {
    addToCart : cartReducer,
    saved : Saved,
    userDetails : userDetailsReducer,
    ownerDetails : ownerDetailsReducer,
    userAuth : userAuthReducer,
    ownerAuth : ownerAuthReducer,
    createListing : createListingsReducer,
    Chatbot : chatBotReducer,
  },
})  