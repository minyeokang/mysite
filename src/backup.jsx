/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import Selfaware from "./components/Selfaware";
import { gsap } from "gsap";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [showMotion, setShowMotion] = useState(false);
  const overlayRef = useRef(null);
  const textRef = useRef(null);
  const motionRef = useRef(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const text = textRef.current;
    const motion = motionRef.current;
    const bottom = motion.getBoundingClientRect().bottom;

    let tl = gsap.timeline();

    tl.set(motion, {
      autoAlpha: 0,
    });

    if (showMotion) {
      tl.to(text, { autoAlpha: 0 })
      .addLabel('text')
      .to(overlay, { clipPath: `inset(100rem 20rem ${bottom}rem 20rem)`, scale: 1, ease: "power3", },'text-=0.2')
      .addLabel('done')
      .to(overlay, { autoAlpha: 0, ease: "power3", },"'done-=0.3" )
      .to(motion, { autoAlpha: 1, },'done-=0.8' );
    }
  }, [showMotion]);

  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowMotion(true);
    }, 1500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <div className="super-container">
        <div className="wrap">
          <div ref={motionRef}>
            {showMotion && <Selfaware />}
          </div>

          <h1>Vite + React</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </div>
      <div className="overlay" ref={overlayRef}>
        <div className="overlay-inner">
          <div className="text" ref={textRef}>
            selfware
          </div>
        </div>
      </div>
    </>

  );
}

export default App;