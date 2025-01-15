import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <div>
    <BrowserRouter>
     <Navbar /> 
      <Routes>
       <Route path="/" element={ <Home />}></Route>
       <Route path="/Home" element={ <Home />}></Route>
       <Route path="/About" element={ <About />}></Route>
       <Route path="/Contact" element={ <Contact />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
