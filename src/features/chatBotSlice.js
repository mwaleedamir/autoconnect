import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { post } from "../services/apiEndpoint";

export const Chatbot = createAsyncThunk(
    'chatbot/sendMessage', 
    async (data, { rejectWithValue }) => {
        try {
            
            const response = await post('/api/chat', data);
            
            return response.data;
        } catch (error) {
            // Make sure to return the rejected value
            return rejectWithValue("Error in chatBot: " + error.message);
        }
    }
);

const chatBotSlice = createSlice({
    name: "chatbot",
    initialState: {
        userId: null,
        messages: [],
        isLoadingMessages: false,
        errorInMessages: null
    },
    reducers: {
        // Add a reducer to clear messages if needed
        clearMessages: (state) => {
            state.messages = [];
            state.errorInMessages = null;
        },
        // Add a reducer to set userId
        setUserId: (state, action) => {
            state.userId = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(Chatbot.pending, (state) => {
                state.isLoadingMessages = true;
                state.errorInMessages = null;
            })
            .addCase(Chatbot.fulfilled, (state, action) => {
                state.isLoadingMessages = false;
                // Make sure action.payload exists and has the expected structure
                if (action.payload) {
                    state.messages.push(action.payload);
                }
            })
            .addCase(Chatbot.rejected, (state, action) => {
                state.isLoadingMessages = false;
                // Use action.payload for rejectWithValue, action.error for other errors
                state.errorInMessages = action.payload || action.error?.message || 'Unknown error occurred';
            });
    }
});

export const { clearMessages, setUserId } = chatBotSlice.actions;
export const chatBotReducer = chatBotSlice.reducer;