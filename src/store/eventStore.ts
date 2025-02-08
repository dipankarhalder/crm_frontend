import { create } from "zustand";

interface EventState {
  listEvents: any;
  setListEvents: (event: any) => void;
}

export const useEventStore = create<EventState>((set) => ({
  listEvents: null,
  setListEvents: (listEvents) => set({ listEvents }),
}));
