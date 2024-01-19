import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  globalLoader: { show: false, msg: "" },
  log: { show: "", msg: "" },
};

const loaderSlice = createSlice({
  name: "uploads",
  initialState,
  reducers: {
    showGloabalLoader: (state, { payload }) => {
      state.globalLoader.show = true;
      state.globalLoader.msg = payload;
    },
    hideGlobalLoader: (state) => {
      state.globalLoader.show = false;
      state.globalLoader.msg = "";
    },
    showLog: (state, { payload }) => {
      state.log.show = true;
      state.log.msg = payload;
    },
    hideLog: (state) => {
      state.log.show = false;
      state.log.msg = "";
    },
  },
});

export const { showGloabalLoader, showLog, hideGlobalLoader, hideLog } =
  loaderSlice.actions;
export default loaderSlice.reducer;
