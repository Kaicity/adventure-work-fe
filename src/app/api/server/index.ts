import axios from "axios";

const BASE_URL = process.env.API_ENDPOINT;

export const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    let res = error.response;
    if (res.status == 401) {
      window.location.href = "http://localhost:3000/login";
    }
    console.error("Looks like there was a problem. Status Code:" + res.status);
    return Promise.reject(error);
  }
);
