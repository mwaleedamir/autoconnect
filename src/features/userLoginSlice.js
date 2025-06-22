import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { post } from "../services/apiEndpoint"

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
        isLoadingUser: false,
        errorUser: null,
        token:null
    },
    reducers: {
        clearUserError: (state) => {
            state.errorUser = null
        },
        userLogout: (state) => {
            state.user = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(userLogin.pending, (state) => {
                state.isLoadingUser = true
                state.errorUser = null
            })
            .addCase(userLogin.fulfilled, (state, action) => {
                state.isLoadingUser = false
                state.user = action.payload
                state.token = action.payload.token
                state.errorUser = null
            })
            .addCase(userLogin.rejected, (state, action) => {
                state.isLoadingUser = false
                state.errorUser = action.payload || action.errorUser.message
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
        isLoadingOwner: false,
        errorOwner: null,
        token :null
    },
    reducers: {
        clearOwnerError: (state) => {
            state.isLoadingOwner = null
        },
        ownerLogout: (state) => {
            state.owner = null
        }
    }, 
    extraReducers: (builder) => {
        builder
            .addCase(ownerLogin.pending, (state) => {
                state.isLoadingOwner = true
                state.errorOwner = null
            })
            .addCase(ownerLogin.fulfilled, (state, action) => {
                state.isLoadingOwner = false
                state.owner = action.payload
                state.token = action.payload.token
                state.errorOwner = null
            })
            .addCase(ownerLogin.rejected, (state, action) => {
                state.isLoadingOwner = false
                state.errorOwner = action.payload || action.errorOwner.message
            })
    }
})

export const { clearUserError, userLogout } = userAuthSlice.actions
export const { clearOwnerError, ownerLogout } = ownerAuthSlice.actions

export const userAuthReducer = userAuthSlice.reducer
export const ownerAuthReducer = ownerAuthSlice.reducer