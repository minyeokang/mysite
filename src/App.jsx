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

    if (showMotion) {
      tl.to(text, {
        autoAlpha: 0,
        onComplete: ()=>{
       
        }
      });
      tl.addLabel('text')
      tl.to(container, {
        clipPath: "inset(100rem 10% 50% 10%)",
        ease: "power3",
      },'text-=0.2');



      tl.addLabel('done')
         tl.to(
        clone,
        {
          autoAlpha: 1,
        },'done-=0.8'
      );
      ///////////////////////////먼가안맞음~
      // tl.to(container, {
      //   autoAlpha: 0,
      //   ease: "power3",
      // },"-=0.7"
      // );

   
  
    
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
            {showMotion && <Selfaware setShowMotion={setShowMotion} />}
          </div>

          {/* <Selfaware setShowMotion={setShowMotion}  />  */}
          {/* <Motion /> */}

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
    //showMotion이 트루면 overlay가 clip-path되고나서 opacity:0; visibility:hidden; 되게 처리해서 full div에서 작아진거처럼 처리

    //shake를 gsap skewX, Y로 처리해서 자연스럽게 처리
  );
}

export default App;
