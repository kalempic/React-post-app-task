import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});
const googleAxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_GOOGLE_URL,
});
export {axiosInstance, googleAxiosInstance};
