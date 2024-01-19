import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedin: false,
  user: {
    fullname: "",
    username: "",
    email: "",
    profile: "",
    _id: "",
    profile: "",
  },
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
      state.isLoggedin = true;
      localStorage.setItem("user", JSON.stringify(payload));
    },
    logout: (state) => {
      localStorage.removeItem("user");
      state.isLoggedin = false;
      state.user = {
        fullname: "",
        username: "",
        email: "",
        profile: "",
        _id: "",
        profile: "",
      };
    },
  },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
