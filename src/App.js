import './App.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
// import Navbar from './components/Navbar';
// import Contact from './components/Contact';
// import About from './components/About';

function App() {
  const userName = "Aryan";
  const userAge = 52;
  return (
    <div>
      <Home name={userName} age={userAge} />
    </div>
  );
}

export default App;
