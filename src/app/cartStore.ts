import { create } from "zustand";
import { IMenuItem } from "../types/types";

const initialItems: IMenuItem[] = [];

export interface IUserCartStore {
  items: IMenuItem[];
  addItem: (item: IMenuItem) => void;
  removeItem: (name: string) => void;
}

export const useCartStore = create<IUserCartStore>((set) => ({
  items: initialItems,
  addItem: (item: IMenuItem) =>
    set((prevState: { items: IMenuItem[] }) => ({
      ...prevState,
      items: [...prevState.items, item],
    })),
  removeItem: (name: string) =>
    set((prevState) => {
      const indexToRemove = prevState.items.findIndex(
        (item) => item.name === name
      );
      if (indexToRemove === -1) return prevState;
      return {
        ...prevState,
        items: prevState.items.filter((_, idx) => idx !== indexToRemove),
      };
    }),

  clearCart: () => set({ items: initialItems }),
}));
