import axiosClient from "./axiosClient";

export const submitEnquiry = (payload) => axiosClient.post("/enquiries", payload);
