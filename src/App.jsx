import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Index";
import About from "./Pages/About/Index";
import Blogs from "./Pages/Blogs/Index";
import Contact from "./Pages/Contact/Index";
import Navbar from "./components/Navbar";

const App = () => {

  return (
    <React.Fragment>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </React.Fragment>
  );
};

export default App;
