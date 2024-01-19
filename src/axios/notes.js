import axios from "axios";
import { URL } from "./register";

const notes = axios.create({
  baseURL: `${URL}/notes`,
  headers: {
    Accept: "application/json",
  },
});
notes.interceptors.request.use(
  (request) => {
    request.headers["Authorization"] = localStorage.getItem("token");
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default notes;
