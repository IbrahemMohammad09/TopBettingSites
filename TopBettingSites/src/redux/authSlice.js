import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: !!localStorage.getItem("accessToken"),
  access: localStorage.getItem("accessToken") || null,
  refresh: localStorage.getItem("refreshToken") || null,
  username: localStorage.getItem("username") || null,
  isStaff: localStorage.getItem("isStaff") === "true"
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { access, refresh, username, isStaff } = action.payload;

      state.isAuthenticated = true;
      state.access = access;
      state.refresh = refresh;
      state.username = username;
      state.isStaff = isStaff;

      // حفظ البيانات في localStorage
      localStorage.setItem("accessToken", access);
      localStorage.setItem("refreshToken", refresh);
      localStorage.setItem("username", username);
      localStorage.setItem("isStaff", isStaff);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.access = null;
      state.refresh = null;
      state.username = null;
      state.isStaff = false;

      // حذف البيانات من localStorage
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("username");
      localStorage.removeItem("isStaff");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
