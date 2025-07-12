import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
import { post } from "../services/apiEndpoint";

export const Chatbot = createAsyncThunk('chatBot', async(data, {rejectWithValue} ) => {
    try {
        console.log("data", data)
        const response = post('/api/chat',data )
        console.log("response",response)
        return response.data
    } catch (error) {
        rejectWithValue("Error in chatBot " + error.message)
    }
})

const chatBotSlice = createSlice({
    name : "Chatbot",
    initialState : {
        userId : null,
        messages : [],
        isLoadingMessages : false,
        errorInMessages : null
    },
    extraReducers : builders => {
        builders
        .addCase(Chatbot.pending, (state) => {
            state.isLoadingMessages = true
        })
        .addCase(Chatbot.fulfilled, (state, action) => {
            state.isLoadingMessages = false,
            state.messages.push(action.payload)
        })
        .addCase(Chatbot.rejected, (state, action) => {
            state.isLoadingMessages = false,
            state.errorInMessages = action.error
        })
    }
    
})

export const chatBotReducer = chatBotSlice.reducer