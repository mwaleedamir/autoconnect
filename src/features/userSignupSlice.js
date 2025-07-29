import  {createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { post } from "../services/apiEndpoint"

export const createUser = createAsyncThunk ('userDetails/createUser', async (data, {rejectWithValue}) =>{
    try {
      const response = await post('/auth/user', data);
      const result = response.data
      return result;
    } catch (error) {
      console.error("Fetch failed:", error);
      return rejectWithValue("Network or unexpected error occurred");
    }
}
);


const userDetailsSignup = createSlice({
    name: 'userDetails',
    initialState: {
        users:[],
        isLoading: false,
        error: null
    },
    extraReducers: (builder) =>{
        builder
        .addCase(createUser.pending, (state) => {
            state.isLoading = true
        })
        .addCase(createUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.users.push(action.payload)
        })
        .addCase(createUser.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
    }
    
})


export const createOwner = createAsyncThunk ('ownerDetails/createOwner', async (data, {rejectWithValue}) =>{
    console.log("data in slice", data)
    const response = await post('/auth/owner',data)
    console.log("response ", response)
    try {
        const result = response.data
        return result
    } catch (error) {
        return rejectWithValue("error response from ownerSignupSlice in creating user",error) 
    }
})


const ownerDetailsSignup = createSlice({
    name: 'ownerDetails',
    initialState: {
        users:[],
        isLoading: false,
        error: null
    },
    extraReducers: (builder) =>{
        builder.addCase(createOwner.pending, (state) => {
            state.isLoading = true
        })
        .addCase(createOwner.fulfilled, (state, action) => {
            state.isLoading = false
            state.users.push(action.payload)
        })
        .addCase(createOwner.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
    }

})

export const userDetailsReducer =  userDetailsSignup.reducer;
export const ownerDetailsReducer = ownerDetailsSignup.reducer;