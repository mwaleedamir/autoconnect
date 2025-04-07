import  {createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { post } from "../services/apiEndpoint"

export const createUser = createAsyncThunk ('createUser', async (data, rejectWithValue) =>{
    const response = await post('/api/user/signup',data)
    try {
        const result = await response.json
        return result
    } catch (error) {
        return rejectWithValue("error responce from userSignupSlice in creating user",error) 
    }
})


const userDetailsSignup = createSlice({
    name: 'userDetails',
    initialState: {
        users:[],
        isLoading: false,
        error: null
    },
    extraReducer: (builder) =>{
        builder.addCase(createUser.pending, (state) => {
            state.isLoading = true
        }),
        builder.addCase(createUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.users.push(action.payload)
        }),
        builder.addCase(createUser.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
    }

})

export default userDetailsSignup.reducer;