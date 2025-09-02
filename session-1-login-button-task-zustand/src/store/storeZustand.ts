/* eslint-disable no-labels */
/* eslint-disable no-unused-labels */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { create } from "zustand";
import { User } from "../common/interface/User";
import { AuthContextType } from "../types/type/commonTypes";
import { persist } from "zustand/middleware";
interface AuthState {
  isLogin: boolean;
  user: User | null;
  userLogin: (userData: User) => void;
  userLogout: () => void;
}
export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isLogin: false,
      user: null,
      userLogin: (userData) =>
        set({
          isLogin: true,
          user: userData,
        }),
      userLogout: () =>
        set({
          isLogin: false,
          user: null,
        }),
    }),
    {
      name: "user-auth-data",
    }
  )
);
export default useAuthStore;
