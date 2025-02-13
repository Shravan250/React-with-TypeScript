import React from "react";
import { usePasswordStore } from "../../store";

const PasswordGenerator = () => {
  const { password, setPassword } = usePasswordStore();

  const generatePassword = () => {
    const { length, uppercase, lowercase, numbers, specialCharacters } =
      password;

    let characters = "";
    if (uppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) characters += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) characters += "0123456789";
    if (specialCharacters) characters += "!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?";

    if (!characters) characters = "abcdefghijklmnopqrstuvwxyz";

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      generatedPassword +=
        characters[Math.floor(Math.random() * characters.length)];
    }

    setPassword({ ...password, generatedPassword });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">
        Password Generator
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Password Length
            </label>
            <input
              type="number"
              value={password.length}
              onChange={(e) =>
                setPassword({ ...password, length: parseInt(e.target.value) })
              }
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              min="4"
              max="50"
            />
          </div>
          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={password.uppercase}
                onChange={(e) =>
                  setPassword({ ...password, uppercase: e.target.checked })
                }
                className="form-checkbox h-5 w-5 text-blue-500"
              />
              <span className="text-gray-700">Include Uppercase Letters</span>
            </label>
          </div>
          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={password.lowercase}
                onChange={(e) =>
                  setPassword({ ...password, lowercase: e.target.checked })
                }
                className="form-checkbox h-5 w-5 text-blue-500"
              />
              <span className="text-gray-700">Include Lowercase Letters</span>
            </label>
          </div>
          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={password.numbers}
                onChange={(e) =>
                  setPassword({ ...password, numbers: e.target.checked })
                }
                className="form-checkbox h-5 w-5 text-blue-500"
              />
              <span className="text-gray-700">Include Numbers</span>
            </label>
          </div>
          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={password.specialCharacters}
                onChange={(e) =>
                  setPassword({
                    ...password,
                    specialCharacters: e.target.checked,
                  })
                }
                className="form-checkbox h-5 w-5 text-blue-500"
              />
              <span className="text-gray-700">Include Special Characters</span>
            </label>
          </div>
          <button
            onClick={generatePassword}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Generate Password
          </button>
        </div>
        {password.generatedPassword && (
          <div className="mt-6">
            <label className="block text-gray-700 font-medium mb-2">
              Generated Password
            </label>
            <div className="p-3 bg-gray-50 border border-gray-300 rounded-lg break-words">
              {password.generatedPassword}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PasswordGenerator;
