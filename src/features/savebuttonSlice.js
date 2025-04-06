import { createSlice } from "@reduxjs/toolkit";

const saveSlice = createSlice ({
 name:"save",
 initialState:{
    items:[]
 },
 reducers:{
    saveItem:(state, action) =>{
        const item = action.payload
        const existingItem = state.items.find((i)=> i._id === item._id)
        if(!existingItem) {
            state.items.push(item)
        }
    },
    removeItems:(state, action) =>{
        state.items = state.items.filter((i)=> i._id !== action.payload)
    },
 }
})

export const { saveItem, removeItems } = saveSlice.actions
export default saveSlice