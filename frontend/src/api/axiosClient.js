import axios from "axios";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api/v1",
  timeout: 15000,
  headers: { "Content-Type": "application/json" },
});

// Normalise errors so components only deal with { message, details }
axiosClient.interceptors.response.use(
  (res) => res.data,
  (error) => {
    const data = error.response?.data;
    return Promise.reject({
      message: data?.message || "Something went wrong. Please try again.",
      details: data?.details || [],
    });
  }
);

export default axiosClient;
