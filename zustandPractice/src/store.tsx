import { create } from "zustand";

type CounterStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

export const useCounter = create<CounterStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

type Recipe = {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string;
};

type RecipeStore = {
  recipes: Recipe[];
  addRecipe: (recipe: Recipe) => void;
  removeRecipe: (id: number) => void;
};

export const useRecipe = create<RecipeStore>((set) => ({
  recipes: [],
  addRecipe: (recipe) =>
    set((state) => ({ recipes: [...state.recipes, recipe] })),
  removeRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
}));
