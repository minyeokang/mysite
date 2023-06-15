import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import styled from "styled-components";
const MotionContainer = styled.div`
.div{
    display: flex;
     align-items: center;
     justify-content: center;
     width: 100%;
     height: 100%; 
}
//   .div {
//     width: 100%;
//     height: 100vh;
//     max-width: 880rem;
//     margin: 0 auto;
//     max-height: 500rem;
//     position: inherit;

//     
//   }
  div {
    font-size: 80px;
  }
`;
const Motion = () => {
  const motionRef = useRef(null);
  const [showMotion, setShowMotion] = useState(false);

  useEffect(() => {
    const container = motionRef.current;
    setShowMotion(true);
    if (showMotion) {
      gsap.to(container, {
        padding: 10,
        // position: "fixed",
        // left: 0,
        // top: 0,
        onComplete: () => {
          gsap.to(container, {
            // position: 'inherit',
          });
        },
      });
    console.log('test')
    }
  }, [showMotion]);

  return (
    <MotionContainer>
      <div className="wrapper" ref={motionRef}>
        <div className="div" >
          <div>Motion</div>
        </div>
      </div>
    </MotionContainer>
  );
};

export default Motion;
