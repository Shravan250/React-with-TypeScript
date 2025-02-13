import { create } from "zustand";

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
