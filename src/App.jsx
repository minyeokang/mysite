/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import Selfaware from "./components/Selfaware";
import { gsap } from "gsap";
import "./App.css";
import { motion, useAnimate, stagger } from "framer-motion";
function App() {
  const [count, setCount] = useState(0);
  const overlayRef = useRef(null);
  const textRef = useRef(null);
  const motionRef = useRef(null);

  const [scope, animate] = useAnimate();
  useEffect(() => {
    const overlay = overlayRef.current;
    const text = textRef.current;
    const motionElement = motionRef.current;
    const bottom = motionElement.getBoundingClientRect().bottom;
    const left = motionElement.getBoundingClientRect().left;
    const sequence = [
      [text, { opacity: 0  }, { at: 0.5, }],
      [overlay, { clipPath: `inset(100rem ${left}rem ${bottom}rem ${left}rem)`  }, { at: 0.8, duration: 1}],
      [overlay, { opacity: 0 }, { at: 1.7 }]
    ];

    animate(sequence, { duration:1 });

  });

  return (
    <>
      <div className="super-container">
        <div className="wrap">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            transition={{ duration: 1 }}>
            <div ref={motionRef}>
              <Selfaware />
            </div>
          </motion.div>

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
      <div ref={scope}>
        <div className="overlay" ref={overlayRef}>
          <div className="overlay-inner">
            <div className="text" ref={textRef}>
              selfware
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
