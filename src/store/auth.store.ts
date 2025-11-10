import { create } from "zustand";

interface AuthState {
  status: "checking" | "authenticated" | "not-authenticated";
  token?: string;
  user?: {
    name: string;
    email: string;
  };
}

export const useAuthStore = create<AuthState>()((set) => ({
  status: "checking",
  token: undefined,
  user: undefined,
}));
