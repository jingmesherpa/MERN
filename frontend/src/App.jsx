import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";

import Home from "./components/Home";
import About from "./components/About";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import Usestatepassword from "./components/Usestatepassword";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/footer" element={<Footer/>} />
      </Routes>
    </>
  );
}

export default App;
