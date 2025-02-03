import { create } from "zustand";

interface AuthState {
  isToken: string | null;
  isLogin: string | null;
  error: string | null;
  loading: boolean;
  setToken: (token: string) => void;
  setLogin: (login: string) => void;
  setError: (error: string | null) => void;
  setLoading: (loading: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isToken: localStorage.getItem("isToken") || null,
  isLogin: localStorage.getItem("isLogin") || null,
  loading: false,
  error: null,
  setToken: (token) => {
    localStorage.setItem("isToken", token);
    set({ isToken: token });
  },
  setLogin: (login) => {
    localStorage.setItem("isLogin", login);
    set({ isLogin: login });
  },
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));
