// src/api/patientsApi.ts

import axiosClient from "./axiosClient";

export const patientsApi = {
  getAll: () => axiosClient.get("/patients"),
  getById: (id: number) => axiosClient.get(`/patients/${id}`),
  create: (data: any) => axiosClient.post("/patients", data),
  update: (id: number, data: any) => axiosClient.put(`/patients/${id}`, data),
  delete: (id: number) => axiosClient.delete(`/patients/${id}`),
};
