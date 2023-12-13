import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About/about";
import Blog from "./pages/Blogs/blogs";
import Contact from "./pages/Contact/contact";
import NavigationBar from "./Navbar";
import Home from "./pages/Home/home";

const App = () => {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/blogs" element={<Blog />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
};

export default App;
