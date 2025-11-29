// src/api/authApi.ts

import axiosClient from "./axiosClient";

export const authApi = {
  login: (data: { email: string; password: string }) =>
    axiosClient.post("/auth/login", data),

  register: (data: any) =>
    axiosClient.post("/auth/register", data),

  logout: () => axiosClient.post("/auth/logout"),
};
