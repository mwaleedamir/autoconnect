// store.js

import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/addToCartBtnSlice'
import Saved from '../features/savebuttonSlice'
import { ownerDetailsReducer, userDetailsReducer } from "../features/userSignupSlice";
import { ownerAuthReducer, userAuthReducer } from '../features/userLoginSlice';
import { createListingsReducer } from '../features/createListingsSlice';
import { chatBotReducer } from '../features/chatBotSlice';
import { carApi } from '../features/carsFiltersSlice'
import filterReducer from '../features/filterSlice'

export const store = configureStore({
  reducer: {
    // Your existing reducers
    addToCart: cartReducer,
    saved: Saved,
    userDetails: userDetailsReducer,
    ownerDetails: ownerDetailsReducer,
    userAuth: userAuthReducer,
    ownerAuth: ownerAuthReducer,
    createListing: createListingsReducer,
    Chatbot: chatBotReducer,
    // Filter reducer
    filter: filterReducer,
    
    // RTK Query API reducer (CORRECT WAY - only this line needed)
    [carApi.reducerPath]: carApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          // Ignore these action types from RTK Query
          'persist/PERSIST',
          'persist/REHYDRATE',
        ],
      },
    }).concat(carApi.middleware),
})

