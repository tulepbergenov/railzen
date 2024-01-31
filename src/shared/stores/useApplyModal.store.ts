import { create } from "zustand";

interface IApplyModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useApplyModalStore = create<IApplyModalStore>()((set) => ({
  isOpen: false,
  onOpen: () => set(() => ({ isOpen: true })),
  onClose: () => set(() => ({ isOpen: false })),
}));
