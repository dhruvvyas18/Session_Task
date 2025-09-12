/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

interface modalInterface {
  isOpen: boolean;
  setOpen: () => void;
  setClose: () => void;
}
export const useModalStore = create<modalInterface>((set) => ({
  isOpen: false,
  setOpen: () => {
    set({ isOpen: true });
  },
  setClose: () => {
    set({ isOpen: false });
  },
}));
