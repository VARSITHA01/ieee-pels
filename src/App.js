import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Contact from "./Components/Contact";

import Events from "./Components/Events";
import Scopemembers from "./Components/Scopemembers";
import Committee from "./Components/Committee";
import About from "./Components/About";
import Articles from "./Components/Articles";
import Membership from "./Components/Membership"; 

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/scopemembers" element={<Scopemembers />} />
          <Route path="/events" element={<Events />} />
          <Route path="/Membership" element={<Membership />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/articles" element={<Articles />} />
          
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
