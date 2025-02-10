import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

interface Props {}

const ThemeSwitcher: React.FC<Props> = (props) => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("ThemeSwitcher must be used within a ThemeProvider");
  }
  const { theme, toggleTheme } = context;

  return (
    <div
      className={`w-[20rem] flex items-center flex-col border-1 rounded ${
        theme === "light" ? "bg-white" : "bg-gray-500"
      }`}
    >
      <button onClick={toggleTheme}>
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
      <p>Current Theme: {theme}</p>
    </div>
  );
};

export default ThemeSwitcher;
