import React from "react";

interface FormFieldProps {
  field: {
    label: string;
    type: "text" | "number" | "password" | "textarea" | "date" | "file";
    value: string;
  };
  index: number;
  onUpdate: (
    index: number,
    updateField: {
      label: string;
      type: "text" | "number" | "password" | "textarea" | "date" | "file";
      value: string;
    }
  ) => void;
  onRemove: (index: number) => void;
}

const FormField: React.FC<FormFieldProps> = ({
  field,
  index,
  onUpdate,
  onRemove,
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onUpdate(index, { ...field, value: e.target.value });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <label className="block text-gray-700 font-medium mb-2">
        {field.label}
      </label>
      {field.type === "textarea" ? (
        <textarea
          value={field.value}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      ) : field.type === "file" ? (
        <input
          type="file"
          onChange={(e) =>
            onUpdate(index, {
              ...field,
              value: e.target.files
                ? Array.from(e.target.files)
                    .map((file) => file.name)
                    .join(", ")
                : "",
            })
          }
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      ) : (
        <input
          type={field.type}
          value={field.value}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      )}
      <button
        type="button"
        onClick={() => onRemove(index)}
        className="mt-2 bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 transition-colors"
      >
        Remove
      </button>
    </div>
  );
};

export default FormField;
