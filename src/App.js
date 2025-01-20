import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter, Routes, Route} from "react-router-dom";
// import Contact  from "./components/Contact";
import Home from "./components/Home";
// import About from "./components/About";
// import Navbar from "./components/Navbar";

function App() {
  const userName = "Aryan";
  const userAge = 20;
  return (
    <>
    <Home name={userName} age={userAge} />
      {/* { <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Home" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
        </BrowserRouter> } */}
    </>
  );
}

export default App;
