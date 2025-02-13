import React, { ChangeEvent, useState } from "react";
import { useFormStore } from "../../store";
import FormField from "./FormField";

interface Field {
  label: string;
  type: "text" | "number" | "password" | "textarea" | "date" | "file";
  value: string;
}
const FormBuilder = () => {
  const { formFields, addField, removeField, resetFields, updateField } =
    useFormStore();

  const [newField, setNewField] = useState<Field>({
    label: "",
    type: "text",
    value: "",
  });

  const handleAddField = () => {
    addField(newField);
    setNewField({ label: "", type: "text", value: "" });
  };

  const handleFieldChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewField((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">
        Form Builder
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="label"
            placeholder="Field Label"
            value={newField.label}
            onChange={handleFieldChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            name="type"
            value={newField.type}
            onChange={handleFieldChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="text">Text</option>
            <option value="number">Number</option>
            <option value="password">Password</option>
            <option value="textarea">Textarea</option>
            <option value="date">Date</option>
            <option value="file">File</option>
          </select>
        </div>
        <div className="flex gap-4">
          <button
            type="button"
            onClick={handleAddField}
            className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Add Field
          </button>
          <button
            type="button"
            onClick={resetFields}
            className="flex-1 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
          >
            Reset Form
          </button>
        </div>
      </div>
      <form className="space-y-4">
        {formFields.map((field, index) => (
          <FormField
            key={index}
            field={field}
            index={index}
            onUpdate={updateField}
            onRemove={removeField}
          />
        ))}
      </form>
    </div>
  );
};

export default FormBuilder;
