/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Selfaware from "./components/Selfaware";
import Motion from "./components/Motion";
import { gsap } from "gsap";
function App() {
  const [count, setCount] = useState(0);
  const [showMotion, setShowMotion] = useState(false);
  const motionRef = useRef(null);
  const textRef = useRef(null);
  const moneyRef = useRef(null);


  useEffect(() => {
    const container = motionRef.current;
    const text = textRef.current;
    const clone = moneyRef.current;
    let tl = gsap.timeline();

    tl.set(clone, {
      autoAlpha: 0,
    });


    const bottom = clone.getBoundingClientRect().bottom

    if (showMotion) {
      tl.to(text, {
        autoAlpha: 0,
      });
      tl.addLabel('text')
      tl.to(container, {
        clipPath: `inset(100rem 20rem ${bottom}rem 20rem)`,
        // borderRadius: '20px',
        scale: 1,
        ease: "power3",
      },'text-=0.2');

      tl.addLabel('done')

      tl.to(container, {
        autoAlpha: 0,
        ease: "power3",
      },"'done-=0.3"
      );

         tl.to(
        clone,
        {
          autoAlpha: 1,
        },'done-=0.8'
      );

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
          <div ref={moneyRef}>
            {showMotion && <Selfaware setShowMotion={setShowMotion}/>}
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
      <div className="overlay" ref={motionRef}>
        <div className="overlay-inner">
          <div className="text" ref={textRef}>
            selfware
          </div>
        </div>
      </div>
    </>


    //shake를 gsap skewX, Y로 처리해서 자연스럽게 처리
  );
}

export default App;
