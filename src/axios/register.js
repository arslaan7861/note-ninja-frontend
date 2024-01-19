import axios from "axios";
// export const URL = "http://192.168.216.27:5000";
export const URL = "http://localhost:3000";
// export const URL = "https://noteninja-2ij0.onrender.com";
const authFetch = axios.create({
  baseURL: `${URL}/auth`,
  withCredentials: true,
  headers: {
    Accept: "application/json",
  },
});
authFetch.interceptors.request.use(async (request) => {
  try {
    const token = localStorage.getItem("token");
    request.headers["Authorization"] = token;
    return request;
  } catch (error) {
    return error;
  }
});
export const register = async (url, user) => {
  const res = await authFetch.post(url, user);
  return res.data;
};
export default authFetch;
