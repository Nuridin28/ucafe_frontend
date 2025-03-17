import { create } from "zustand";
import { IMenuItem } from "../types/types";

const initialItems: IMenuItem[] = [];

export interface IUserCartStore {
  items: IMenuItem[];
  addItem: (item: IMenuItem) => void;
  removeItem: (itemId: number) => void;
}

export const useCartStore = create<IUserCartStore>((set) => ({
  items: initialItems,
  addItem: (item: IMenuItem) =>
    set((prevState: { items: IMenuItem[] }) => ({
      ...prevState,
      items: [...prevState.items, item],
    })),
  removeItem: (itemId: number) =>
    set((prevState: { items: IMenuItem[] }) => ({
      ...prevState,
      items: prevState.items.filter((_, index) => index !== itemId),
    })),
  clearCart: () => set({ items: initialItems }),
}));
