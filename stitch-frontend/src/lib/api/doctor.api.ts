// src/api/doctorsApi.ts

import axiosClient from "./axiosClient";

export const doctorsApi = {
  getAll: () => axiosClient.get("/doctors"),
  getById: (id: number) => axiosClient.get(`/doctors/${id}`),
  create: (data: any) => axiosClient.post("/doctors", data),
  update: (id: number, data: any) => axiosClient.put(`/doctors/${id}`, data),
  delete: (id: number) => axiosClient.delete(`/doctors/${id}`),
};
