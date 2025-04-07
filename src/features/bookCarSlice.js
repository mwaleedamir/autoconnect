import { createSlice } from "@reduxjs/toolkit";

const bookCar = createSlice({
    name: 'bookCar',
    initialState: {
        bookings: [],
    },
    reducers: {
        addBooking(state, action) {
            const item = action.payload
            const existingItem = state.items.find((i)=> i._id === item._id)
            if(!existingItem) {
                state.bookings.push(item);
            }
        },
        removeBooking(state, action) {
            state.bookings = state.bookings.filter(booking => booking.id!== action.payload);
        }
    }
})

export const { addBooking, removeBooking } = bookCar.actions;
export default bookCar.reducer;