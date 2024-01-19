import { createAsyncThunk } from "@reduxjs/toolkit";
import authFetch, { register } from "../../axios/register";
import { logout, setUser } from "../features/userSlice";
import { getUploads } from "./uploads";
import {
  hideGlobalLoader,
  hideLog,
  showGloabalLoader,
  showLog,
} from "../features/loaders";
export const registeruser = createAsyncThunk(
  "user/register",
  async (user, thunkApi) => {
    try {
      thunkApi.dispatch(showGloabalLoader("registering ..."));
      const resp = await register("/register", user);
      await thunkApi.dispatch(setUser(resp));
      thunkApi.dispatch(hideGlobalLoader());
      thunkApi.dispatch(showLog("registered succesfully"));
      setTimeout(() => {
        thunkApi.dispatch(hideLog());
      }, 3000);
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

export const verifyUser = createAsyncThunk(
  "user/verify",
  async (user, thunkApi) => {
    try {
      const offlineUser = JSON.parse(localStorage.getItem("user"));
      thunkApi.dispatch(setUser({ user: offlineUser }));
      const { data } = await authFetch.get("/get");
      console.log(data);
      thunkApi.dispatch(setUser(data));
      thunkApi.dispatch(getUploads());
    } catch (error) {
      console.log(error);
      thunkApi.dispatch(logout());
    }
  }
);

export const logoutUser = createAsyncThunk(
  "user/logout",
  async (a, thunkApi) => {
    try {
      const { data } = await authFetch.delete("/login");
      thunkApi.dispatch(logout());
    } catch (error) {
      console.log(error);
    }
  }
);

export const login = createAsyncThunk(
  "user/register",
  async (user, thunkApi) => {
    try {
      thunkApi.dispatch(showGloabalLoader("loging in ..."));
      const resp = await register("/login", user);
      console.log(resp);
      await thunkApi.dispatch(setUser(resp));
      thunkApi.dispatch(getUploads());
      thunkApi.dispatch(hideGlobalLoader());
      thunkApi.dispatch(showLog("logged in succesfully"));
      setTimeout(() => {
        thunkApi.dispatch(hideLog());
      }, 3000);
    } catch (error) {
      thunkApi.dispatch(hideGlobalLoader());
      // authFetch.delete("/login");
      console.log(error.response.status);
      if (error.message === "Network Error") {
        thunkApi.dispatch(showLog("network error"));
        setTimeout(() => {
          thunkApi.dispatch(hideLog());
        }, 3000);
        return;
      }
      // if(error.res)
      thunkApi.dispatch(showLog(error.response.data.message));
      setTimeout(() => {
        thunkApi.dispatch(hideLog());
      }, 3000);
    }
  }
);
