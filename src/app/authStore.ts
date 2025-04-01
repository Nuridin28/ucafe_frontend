import { create } from "zustand";

interface AuthState {
  isAuth: boolean;
  role: string | null;
  login: (token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuth: localStorage.getItem("token") ? true : false,
  role: localStorage.getItem("role") || null,
  login: (token: string) => {
    localStorage.setItem("token", token);
    try {
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      set({ isAuth: true, role: decodedToken.role });
      localStorage.setItem("role", decodedToken.role);
    } catch (error) {
      console.error("Ошибка декодирования токена:", error);
      set({ isAuth: false, role: null });
      localStorage.removeItem("token");
      localStorage.removeItem("role");
    }
  },
  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    set({ isAuth: false, role: null });
  },
}));
