import React, { useContext } from 'react';
import { ThemeContext } from "./ThemeContext";

function ThemeSwitcher() {
    const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div style={{
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff", 
        padding: "20px",
         textAlign: "center",
    }}
    >
        <p>The current Theme is <strong>{theme}
            </strong>
        </p>
        <button onClick={toggleTheme}>
            switch to {theme === "light" ? "Dark" : "light"} mode of light 
        </button>
    </div>
  );
}

export default ThemeSwitcher;