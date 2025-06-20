import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { post } from "../services/apiEndpoint"

// USER AUTH SLICE
export const userLogin = createAsyncThunk(
    'userLogin',
    async (data, { rejectWithValue }) => {
        try {
            const response = await post('/auth/user/login', data)
            const result =  response.data
            return result
        } catch (error) {
            return rejectWithValue("Error response from user login: " + error.message)
        }
    }
)

const userAuthSlice = createSlice({
    name: 'userAuth',
    initialState: {
        user: null,
        isLoading: false,
        error: null
    },
    reducers: {
        clearUserError: (state) => {
            state.error = null
        },
        userLogout: (state) => {
            state.user = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(userLogin.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(userLogin.fulfilled, (state, action) => {
                state.isLoading = false
                state.user = action.payload
                state.error = null
            })
            .addCase(userLogin.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload || action.error.message
            })
    }
})

// OWNER AUTH SLICE
export const ownerLogin = createAsyncThunk(
    'ownerLogin',
    async (data, { rejectWithValue }) => {
        try {
            const response = await post('/auth/owner/login', data)
            const result = await response.data
            return result
        } catch (error) {
            return rejectWithValue("Error response from owner login: " + error.message)
        }
    }
)

const ownerAuthSlice = createSlice({
    name: 'ownerAuth',
    initialState: {
        owner: null,
        isLoading: false,
        error: null
    },
    reducers: {
        clearOwnerError: (state) => {
            state.error = null
        },
        ownerLogout: (state) => {
            state.owner = null
        }
    }, 
    extraReducers: (builder) => {
        builder
            .addCase(ownerLogin.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(ownerLogin.fulfilled, (state, action) => {
                state.isLoading = false
                state.owner = action.payload
                state.error = null
            })
            .addCase(ownerLogin.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload || action.error.message
            })
    }
})

export const { clearUserError, userLogout } = userAuthSlice.actions
export const { clearOwnerError, ownerLogout } = ownerAuthSlice.actions

export const userAuthReducer = userAuthSlice.reducer
export const ownerAuthReducer = ownerAuthSlice.reducer