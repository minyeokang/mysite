/* eslint-disable no-unused-vars */
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion, useAnimate } from "framer-motion";
import Motion from "../components/Motion";
import splitType from "https://cdn.skypack.dev/split-type@0.3.3";
import Header from "../components/Header";
const Home = () => {
  const overlayRef = useRef(null);
  const textRef = useRef(null);
  const motionRef = useRef(null);
  const tl = gsap.timeline();

  const [scope, animate] = useAnimate();
  useEffect(() => {
    const overlay = overlayRef.current;
    const text = textRef.current;
    const ourText = new splitType(text, { types: 'chars' })
    const chars = ourText.chars

    const motionElement = motionRef.current;
    const bottom = motionElement.getBoundingClientRect().bottom;
    const left = motionElement.getBoundingClientRect().left;
    const top = motionElement.getBoundingClientRect().top + 20;

    const sequence = [
      [overlay, { clipPath: `inset(${top}px ${left}px 20px ${left}px)`  }, { at: 0.8}],
      [motionElement, { opacity: 1,  visibility: 'visible' }, { at: 0.7 }],
      [overlay, { opacity: 0 }, { at: 0.9 }],
    ];

    gsap.fromTo(
      chars, 
      { 
        y: 40,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.03,
        duration: 1,
        ease: "power2.in",
        onComplete:()=>{
          

          animate(sequence, { duration:2 });
        }
      })

  });
  return (
    <>
    <div className="super-container">
    <div className="wrap">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
            <div ref={motionRef} style={{opacity: 0, visibility: 'hidden'}}>
              <Motion /> 
              </div>
      </motion.div>    
        
    </div>
  </div>
  <div ref={scope}>
    <div className="overlay" ref={overlayRef}>
      <div className="overlay-inner">
        <div className="text" ref={textRef}>
          Frontend
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default Home