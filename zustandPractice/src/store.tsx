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

interface Expense {
  id: number;
  description: string;
  amount: number;
}

interface ExpenseTrackerStore {
  expenses: Expense[];
  addExpense: (expense: Expense) => void;
  removeExpense: (id: number) => void;
}

export const useExpenseTracker = create<ExpenseTrackerStore>((set) => ({
  expenses: [],
  addExpense: (expense) =>
    set((state) => ({ expenses: [...state.expenses, expense] })),
  removeExpense: (id) =>
    set((state) => ({
      expenses: state.expenses.filter((expense) => {
        expense.id !== id;
      }),
    })),
}));

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

interface FormField {
  label: string;
  type: "text" | "number" | "password" | "textarea" | "date" | "file";
  value: string;
}

interface FormFieldStore {
  formFields: FormField[];
  addField: (field: FormField) => void;
  removeField: (index: number) => void;
  updateField: (index: number, updateField: FormField) => void;
  resetFields: () => void;
}

export const useFormStore = create<FormFieldStore>((set) => ({
  formFields: [],
  addField: (field) =>
    set((state) => ({ formFields: [...state.formFields, field] })),
  removeField: (index) =>
    set((state) => ({
      formFields: state.formFields.filter((_, i) => i !== index),
    })),
  updateField: (index, updateField) =>
    set((state) => ({
      formFields: state.formFields.map((field, i) =>
        i === index ? updateField : field
      ),
    })),
  resetFields: () => set({ formFields: [] }),
}));
