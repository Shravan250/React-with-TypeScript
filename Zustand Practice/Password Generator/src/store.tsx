import { create } from "zustand";

interface Password {
  length: number;
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  specialCharacters: boolean;
  generatedPassword?: string;
}

interface PasswordStore {
  password: Password;
  setPassword: (password: Password) => void;
}

export const usePasswordStore = create<PasswordStore>((set) => ({
  password: {
    length: 30,
    uppercase: false,
    lowercase: false,
    numbers: false,
    specialCharacters: false,
    generatedPassword: "",
  },
  setPassword: (password) => set({ password }),
}));
