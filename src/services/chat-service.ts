import { create } from "zustand";

interface ChatState {
  messages: ChatMessage[];
  isLoading: boolean;
  sendMessage: (content: string, mode: ChatMode) => Promise<void>;
  clearChat: () => void;
}

interface ChatMessage {
  id: string;
  content: string;
  sender: "user" | "ai" | "professional" | "community";
  timestamp: Date;
}

export const useChatStore = create<ChatState>((set, get) => ({
  messages: [],
  isLoading: false,
  sendMessage: async (content: string, mode: ChatMode) => {
    set({ isLoading: true });

    try {
      // Add user message
      const userMessage: ChatMessage = {
        id: crypto.randomUUID(),
        content,
        sender: "user",
        timestamp: new Date(),
      };

      set((state) => ({
        messages: [...state.messages, userMessage],
      }));

      // Handle different chat modes
      let response;
      switch (mode) {
        case "ai":
          response = await fetch("/api/chat/ai", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ message: content }),
          });
          break;
        case "professional":
          response = await fetch("/api/chat/professional", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ message: content }),
          });
          break;
        case "community":
          response = await fetch("/api/chat/community", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ message: content }),
          });
          break;
      }

      const data = await response.json();

      const aiMessage: ChatMessage = {
        id: crypto.randomUUID(),
        content: data.message,
        sender: mode,
        timestamp: new Date(),
      };

      set((state) => ({
        messages: [...state.messages, aiMessage],
        isLoading: false,
      }));
    } catch (error) {
      console.error("Error sending message:", error);
      set({ isLoading: false });
    }
  },
  clearChat: () => set({ messages: [] }),
}));
