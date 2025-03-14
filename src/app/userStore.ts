import { create } from 'zustand';

interface StoreState {
    fullName: string;
    setFullName: (name: string) => void;
    email: string;
    setEmail: (email: string) => void;
}

export const userStore = create<StoreState>((set) => ({
    fullName: '',
    setFullName: (name) => set({ fullName: name }),
    email: '',
    setEmail: (email) => set({ email }),
}));

