import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
const store = configureStore({
  reducer: {
    AuthData: AuthSlice.reducer,
  },
});

export default store;
