import { create } from "zustand";

interface FormFields {
  label: string;
  type: "text" | "number" | "password" | "textarea" | "date" | "file";
  value: string;
}

interface FormStore {
  formFields: FormFields[];
  addFormField: (field: FormFields) => void;
  removeFormField: (index: number) => void;
  updateFormField: (index: number, updateField: FormFields) => void;
  resetFormField: () => void;
}

export const useFormStore = create<FormStore>((set) => ({
  formFields: [],
  addFormField: (field) =>
    set((state) => ({ formFields: [...state.formFields, field] })),
  removeFormField: (index) =>
    set((state) => ({
      formFields: state.formFields.filter((_, i) => i !== index),
    })),
  updateFormField: (index, updateField) =>
    set((state) => ({
      formFields: state.formFields.map((field, i) =>
        i === index ? updateField : field
      ),
    })),
  resetFormField: () => set({ formFields: [] }),
}));
