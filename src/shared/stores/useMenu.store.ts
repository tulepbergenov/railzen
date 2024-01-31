import { create } from "zustand";

interface IMenuStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useMenuStore = create<IMenuStore>()((set) => ({
  isOpen: false,
  onOpen: () => set(() => ({ isOpen: true })),
  onClose: () => set(() => ({ isOpen: false })),
}));
