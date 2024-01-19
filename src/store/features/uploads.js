import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  myUploads: [],
  currentNote: {},
  uploads: [],
};

const uploadsSlice = createSlice({
  name: "uploads",
  initialState,
  reducers: {
    setUploads: (state, { payload }) => {
      state.myUploads = payload;
    },
    setCurrentNote: (state, { payload }) => {
      state.currentNote =
        state.myUploads.find((upload) => upload._id === payload) ||
        state.uploads.find((upload) => upload._id === payload);
    },
    addGlobalUploads: (state, { payload }) => {
      state.uploads = payload;
    },
    addMyUpload: (state, { payload }) => {
      state.myUploads.push(payload);
    },
  },
});

export const { setUploads, setCurrentNote, addGlobalUploads, addMyUpload } =
  uploadsSlice.actions;
export default uploadsSlice.reducer;
