import axios from "axios";
import { URL } from "./register";

const upload = axios.create({
  baseURL: `${URL}/uploads`,
  withCredentials: true,
  headers: {
    Accept: "application/json",
  },
});
upload.interceptors.request.use(
  (request) => {
    request.headers["Content-Type"] = "multipart/form-data";
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default upload;
