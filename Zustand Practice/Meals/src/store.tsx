import { create } from "zustand";

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

interface MealsStore {
  meals: Meal[];
  searchQuery: string;
  setMeals: (meal: Meal[]) => void;
  setSearchQuery: (query: string) => void;
}

export const useMeals = create<MealsStore>((set) => ({
  meals: [],
  searchQuery: "",
  setMeals: (meals: Meal[]) => set({ meals }),
  setSearchQuery: (query: string) => set({ searchQuery: query }),
}));
