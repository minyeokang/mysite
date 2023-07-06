/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import Selfaware from "./components/Motion";
import { gsap } from "gsap";
import "./App.css";
import { motion, useAnimate, stagger } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import './reset.css'
import './App.css'
function App() {
 


  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<Contact />} />
    </Routes>
     
    </>
  );
}

export default App;
