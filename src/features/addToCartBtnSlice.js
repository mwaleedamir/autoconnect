import { createSlice } from "@reduxjs/toolkit";
import { removeItems } from "./savebuttonSlice";

const AddToCart = createSlice ({
    name: 'AddToCart',
    initialState: {
        cartItems: [],
    },
    reducers: {
        addToCartItems : (state, action) =>{
            const cartItems = action.payload
            const existItems = state.cartItems.find(item => item._id === cartItems._id)
            if(existItems){
                existItems.quantity += 1
            }else {
                state.cartItems.push(cartItems)
            }
        },
        removeCartItems :(state, action ) =>{
            state.cartItems = state.cartItems.filter((item) => item._id !== action.payload)
        },
        clearCart :(state) =>{
            state.cartItems = []
        }

    }
})

export const { addToCartItems, removeCartItems, clearCart } = AddToCart.actions
export default AddToCart.reducer;