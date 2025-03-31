import { create } from 'zustand';

interface StoreState {
    fullName: string;
    setFullName: (name: string) => void;
    email: string;
    setEmail: (email: string) => void;
    role: string;
    setRole: (role: string) => void;
}

export const userStore = create<StoreState>((set) => ({
    fullName: '',
    setFullName: (name) => set({ fullName: name }),
    email: '',
    setEmail: (email) => set({ email }),
    role: '',
    setRole: (role) => set({ role }),
}));