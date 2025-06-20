import  {createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { post } from "../services/apiEndpoint"

export const createUser = createAsyncThunk ('userDetails/createUser', async (data, {rejectWithValue}) =>{
    try {
      const response = await post('/auth/user', data);
      console.log("Response:", response);
      console.log("Status:", response.status);

      const result = response.data
      console.log("result", result);
      
      return result;

    } catch (error) {
      console.error("Fetch failed:", error);
      return rejectWithValue("Network or unexpected error occurred");
    }
}
);

// export const createUser = createAsyncThunk(
//   'createUser',
//   async (formData, thunkAPI) => {
//     try {
//       const response = await axios.post('http://localhost:8000/auth/user', formData);
//       return response.data; // 👈 return this if you want access in `.payload`
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data); // 👈 will go to `.payload` on reject
//     }
//   }
// );

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
    const response = await post('/auth/owner',data)
    try {
        const result = await response.json()
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