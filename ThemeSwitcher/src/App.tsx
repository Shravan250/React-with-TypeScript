import React from "react";
import ThemeProvider from "./context/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";

const App = () => {
  return (
    <div className="flex items-center flex-col justify-between">
      <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider>
    </div>
  );
};

export default App;
