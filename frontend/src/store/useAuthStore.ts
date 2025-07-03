import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
interface AuthStore {
  isLoading: boolean;
  isAdmin: boolean;
  error: string | null;
  checkAdminStatus: () => Promise<void>;
  reset: () => void;
}
export const useAuthStore = create<AuthStore>((set) => ({
  isLoading: false,
  isAdmin: false,
  error: null,
  checkAdminStatus: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosInstance.get("/admin/check");
      set({ isAdmin: response.data.isAdmin });
    } catch (error: any) {
      set({ error: error.response.data.message });
    } finally {
      set({ isLoading: false });
    }
  },
  reset: () => set({ isLoading: false, isAdmin: false, error: null }),
}));
