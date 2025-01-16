import './App.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ThemeSwitcher} from './components/ThemeSwitcher';
import {ThemeProvider} from './components/ThemeContext';

function App() {
  return (
      <ThemeProvider>
        <div>
          <h1>Hello</h1>
          <ThemeSwitcher />
        </div>
      </ThemeProvider>
  );
}

export default App;
