import { createSlice } from "@reduxjs/toolkit";
import { AuthContextType } from "../types/type/commonTypes";
const initialState: Partial<AuthContextType> = {
  isLoggin: localStorage.getItem("isLoggin")
    ? JSON.parse(localStorage.getItem("isLoggin")!)
    : false,
};
const AuthSlice = createSlice({
  name: "AuthData",
  initialState: initialState,
  reducers: {
    userLogin(state, action) {
      state.isLoggin = true;
      localStorage.setItem("isLoggin", JSON.stringify(true));
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    userLogout(state) {
      state.isLoggin = false;

      localStorage.removeItem("user");
      localStorage.removeItem("isLoggin");
    },
  },
});

export const AuthActions = AuthSlice.actions;
export default AuthSlice;
