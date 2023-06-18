import { useEffect, useRef } from "react";
import { motion, useAnimate } from "framer-motion";
import Motion from "../components/Motion";
const Home = () => {
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