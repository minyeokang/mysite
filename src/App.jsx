/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import Selfaware from "./components/Motion";
import { gsap } from "gsap";
import "./App.css";
import { motion, useAnimate, stagger } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import './reset.css'
import './App.css'
function App() {
 


  return (
    <>
    
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
     
    </>
  );
}

export default App;
