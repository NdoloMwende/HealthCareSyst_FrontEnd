// src/store/auth.store.ts
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type UserRole = "admin" | "doctor" | "patient" | "guest";

interface AuthState {
  role: UserRole;
  token: string | null;

  setRole: (role: UserRole) => void;
  login: (role: UserRole, token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      role: "guest",
      token: null,

      setRole: (role) => set({ role }),

      login: (role, token) => {
        set({ role, token });
      },

      logout: () => {
        set({ role: "guest", token: null });
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage), // FIXED
    }
  )
);
