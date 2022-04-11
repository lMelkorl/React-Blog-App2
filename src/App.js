import React, { useState, useEffect } from 'react';
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Topbar from "./components/Topbar/Topbar";
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Write from './components/Write/Write';
import Category from './components/Category/Category';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Labels from './components/Labels/Labels';
import Privacy from './components/Privacy/Privacy';
import SinglePosts from './components/SinglePosts/SinglePosts';

//rfc ile compnent
function App() {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  )

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener('change', e => setMatches(e.matches));
  }, []);

  return (
    <>
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Home matches={matches} />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/write" element={<Write matches={matches} />} />
        <Route exact path="/categories" element={<Category matches={matches} />} />
        <Route exact path="/about" element={<About matches={matches} />} />
        <Route exact path="/contact" element={<Contact matches={matches} />} />
        <Route exact path="/labels" element={<Labels matches={matches} />} />
        <Route exact path="/privacy" element={<Privacy matches={matches} />} />
        <Route exact path="/post" element={<SinglePosts matches={matches} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
