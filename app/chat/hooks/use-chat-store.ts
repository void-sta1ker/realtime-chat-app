import { create } from "zustand";

interface ChatStore {
  activeChat: string;
  setActiveChat: (id: string) => void;
}

const useChatStore = create<ChatStore>()((set) => ({
  activeChat: "",
  setActiveChat: (id) => {
    set((_state) => ({ activeChat: id }));
  },
}));

export default useChatStore;
