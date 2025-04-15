import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export type ChatMode = "ai" | "professional" | "community";

interface ChatMessage {
  id: string;
  content: string;
  sender: "user" | "ai" | "professional" | "community";
  timestamp: Date;
}

interface ChatState {
  messages: ChatMessage[];
  isLoading: boolean;
  error: string | null;
  currentMode: ChatMode;
  selectedAgent: string | null;
}

const initialState: ChatState = {
  messages: [],
  isLoading: false,
  error: null,
  currentMode: "ai",
  selectedAgent: null,
};

export const sendMessage = createAsyncThunk(
  "chat/sendMessage",
  async ({ content, mode }: { content: string; mode: ChatMode }) => {
    const response = await fetch(`/api/chat/${mode}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: content }),
    });

    if (!response.ok) {
      throw new Error("Failed to send message");
    }

    const data = await response.json();
    return data;
  }
);

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setChatMode: (state, action) => {
      state.currentMode = action.payload;
    },
    setSelectedAgent: (state, action) => {
      state.selectedAgent = action.payload;
    },
    clearChat: (state) => {
      state.messages = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendMessage.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.isLoading = false;
        // Add user message
        state.messages.push({
          id: crypto.randomUUID(),
          content: action.meta.arg.content,
          sender: "user",
          timestamp: new Date(),
        });
        // Add response message
        state.messages.push({
          id: crypto.randomUUID(),
          content: action.payload.message,
          sender: action.meta.arg.mode,
          timestamp: new Date(),
        });
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to send message";
      });
  },
});

export const { setChatMode, setSelectedAgent, clearChat } = chatSlice.actions;
export default chatSlice.reducer;
