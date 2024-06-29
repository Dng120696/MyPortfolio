import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { initialState } from "./initialState";
const useStore = create(
  immer((set) => ({
    ...initialState,
    setOpenProjectModal: (params) =>
      set((state) => {
        state.isOpenProjectModal = params;
      }),
    setProjName: (params) =>
      set((state) => {
        state.projName = params;
      }),
    setOverlay: (params) =>
      set((state) => {
        state.overlay = params;
      }),
  }))
);

export default useStore;
