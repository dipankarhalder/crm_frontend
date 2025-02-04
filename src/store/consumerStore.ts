import { create } from "zustand";

interface ConsumerState {
  listConsumer: any;
  loading: boolean;
  setListConsumer: (consumer: any) => void;
  setLoading: (loading: boolean) => void;
}

export const useConsumerStore = create<ConsumerState>((set) => ({
  listConsumer: null,
  loading: false,
  setListConsumer: (listConsumer) => set({ listConsumer }),
  setLoading: (loading) => set({ loading }),
}));
