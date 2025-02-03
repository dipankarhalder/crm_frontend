import { create } from "zustand";

interface ProfileState {
  profile: any;
  loading: boolean;
  setProfile: (profile: any) => void;
  setLoading: (loading: boolean) => void;
}

export const useProfileStore = create<ProfileState>((set) => ({
  profile: null,
  loading: false,
  setProfile: (profile) => set({ profile }),
  setLoading: (loading) => set({ loading }),
}));
