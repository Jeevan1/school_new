import axios from "axios";

// Create an axios instance with a base URL and timeout
const apiUrl = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: apiUrl, // Replace with your API URL
  timeout: 10000,
});

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      console.error("Error Response:", error.response);
      //   enqueueSnackbar("Something went wrong", { variant: "error" });
    }
    return Promise.reject(error);
  }
);

// API methods
const get = (url, params = {}, config = {}) =>
  api.get(url, { ...config, params });
const post = (url, data, config = {}) => api.post(url, data, config);
const put = (url, data, config = {}) => api.put(url, data, config);
const patch = (url, data, config = {}) => api.patch(url, data, config);
const del = (url, config = {}) => api.delete(url, config);

const apiService = {
  get,
  post,
  put,
  patch,
  delete: del,
};

export default apiService;
