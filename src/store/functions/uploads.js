import { createAsyncThunk } from "@reduxjs/toolkit";
import upload from "../../axios/upload";
import { addGlobalUploads, addMyUpload, setUploads } from "../features/uploads";
import notes from "../../axios/notes";
import {
  hideGlobalLoader,
  hideLog,
  showGloabalLoader,
  showLog,
} from "../features/loaders";

export const getUploads = createAsyncThunk(
  "uploads/get",
  async (a, thunkApi) => {
    const { data } = await upload.get("/");
    thunkApi.dispatch(setUploads(data));
    localStorage.setItem("uploads", JSON.stringify(data));
  }
);
export const getNotes = createAsyncThunk(
  "uploads/getNotes",
  async (a, thunkApi) => {
    const { data } = await notes.get("/");
    thunkApi.dispatch(addGlobalUploads(data));
    localStorage.setItem("notes", JSON.stringify(data));
  }
);
export const uploadNote = createAsyncThunk(
  "uploads/uploadNote",
  async (formData, thunkApi) => {
    try {
      thunkApi.dispatch(showGloabalLoader("uploading"));
      const { data } = await upload.post("/", formData);
      thunkApi.dispatch(addMyUpload(data));
      thunkApi.dispatch(hideGlobalLoader());
      thunkApi.dispatch(showLog("uploaded succesfully"));
      setTimeout(() => thunkApi.dispatch(hideLog()), 3000);
    } catch (error) {
      thunkApi.dispatch(hideGlobalLoader());
      if (error.message === "Network Error") {
        thunkApi.dispatch(showLog("network error"));
        setTimeout(() => {
          thunkApi.dispatch(hideLog());
        }, 3000);
        return;
      }
      thunkApi.dispatch(showLog(error.response.data.message));
      setTimeout(() => {
        thunkApi.dispatch(hideLog());
      }, 3000);
    }
  }
);

export const postComment = createAsyncThunk(
  "note/comment",
  async (cmtData, thunkApi) => {
    try {
      const { data } = await notes.post("/comment", cmtData);
      console.log(data);
    } catch (error) {}
  }
);
