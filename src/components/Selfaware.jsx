/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef, useCallback, useMemo, } from "react";
import { gsap } from "gsap";

//fomulas
function getRandomPosition(wrapperWidth, wrapperHeight, size) {

  //calculating columns and rows 
  const numColumns = Math.floor(wrapperWidth / size);
  const numRows = Math.floor(wrapperHeight / size);
  const numBoxes = numColumns * numRows;

  const positions = new Set();
  const getRandomCoordinate = (max) => Math.floor(Math.random() * max) * size;
  const remainingSpace = wrapperHeight - numRows * size;
  console.log(remainingSpace)
  //generate random position within the wrapper
  while (positions.size < numBoxes) {

    const left = getRandomCoordinate(numColumns);
    const top = getRandomCoordinate(numRows);
    const adjustedTop = remainingSpace > 0 ? top + remainingSpace : top;
    positions.add(`${left},${top}`);

  }

  //convert position to an array of object
  return Array.from(positions).map((position) => {

    const [left, top] = position.split(",");

    return { left: parseInt(left), top: parseInt(top) };

  });

}

//component
const Selfaware = () => {

  //variables
  const [boxPositions, setBoxPositions] = useState([]);
  const wrapper = useRef(null);
  const cloneRef = useRef(null);
  const circleRef = useRef(null);
  const [newWrapWidth, setNewWrapWidth] = useState(0);
  const [newWrapHeight, setNewWrapHeight] = useState(0);
  const [showCircle, setShowCircle] = useState(false);
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });
  const [textColor, setTextColor] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const letters = useMemo(()=>["F", "R", "O", "N", "T", "E", "N", "D"],[])
  const colorArray = useMemo( () => [ { background: "#019563", color: "#F7D9D3" }, { background: "#f3be22", color: "#5267AB" }, { background: "#5267AB", color: "#F7D9D3" }, { background: "#ee4e2b", color: "#f3be22" }, ], [] );

  const randomlyPosition = useCallback(() => {

    //generate random position
    const positions = getRandomPosition(newWrapWidth, newWrapHeight, 140);
    const slicedPositions = positions
      .slice(0, letters.length)
      .map((position, index) => ({
        ...position,
        rotation: Math.random() * 360, // Random rotation angle
      }));

    setBoxPositions(slicedPositions);

  }, [newWrapWidth, newWrapHeight, letters.length]);

  const makeCircle = useCallback((event) => {

    //calculating position of clicked circle 
    const divOffsetLeft = wrapper.current.getBoundingClientRect().left;
    const divOffsetTop = wrapper.current.getBoundingClientRect().top;
    const clientXRelativeToDiv = event.clientX - divOffsetLeft;
    const clientYRelativeToDiv = event.clientY - divOffsetTop;

    setCirclePosition({ x: clientXRelativeToDiv, y: clientYRelativeToDiv });
    setShowCircle(true);

  }, []);

  //actual motion for the circle
  const spread = useCallback(() => {

    const circle = circleRef.current;
    let tl = gsap.timeline();

    if (showCircle) {

      tl.fromTo(
        circle,
        {
          width: "100rem",
          height: "100rem",
          scale: 1,
          borderRadius: "100%",
          duration: 1.5,
        },
        {
          scale: 20,
          borderRadius: "50%",
          duration: 1,
          onComplete: () => {
            tl.invalidate();
          },
        }
      );
    }
  }, [showCircle]);

  const changeColor = useCallback(() => {

    setCurrentIndex((prevIndex) => {

      //calculating index, when it's exceeds, wrap around to 0 
      const newIndex = (prevIndex + 1) % letters.length;
      const colorIndex =
        newIndex >= colorArray.length ? newIndex - colorArray.length : newIndex;

      //update colors based on the newIndex 
      setTextColor(colorArray[colorIndex].color);
      setBgColor(colorArray[colorIndex].background);

      return newIndex;

    });
  }, [colorArray, letters]);

  const handleClick = useCallback((event) => {

    //trigger actions on click 
    randomlyPosition();
    makeCircle(event);
    changeColor();
    
  }, [randomlyPosition, makeCircle, changeColor]);


  //initiate when loaded 
  useEffect(() => {

    setNewWrapWidth(wrapper.current.clientWidth);
    setNewWrapHeight(wrapper.current.clientHeight);
    randomlyPosition();

  }, [randomlyPosition]);

  useEffect(()=>{

    spread()

  }, [circlePosition, boxPositions, spread])

  return (

    <div className="wrapper" ref={wrapper} >

      {boxPositions.map((position, index) => (
        <div className={`clone${index === currentIndex ? ' shake' : ''}`} key={index} 
        style={{ 
          left: position.left, 
          top: position.top, 
          "--red": textColor, 
          transform: `rotate(${position.rotation}deg)`, 
        }} 

        ref={cloneRef} onClick={handleClick}>

          <span>{letters[index]}</span>

        </div>
      ))} {/* .clone */}

      {showCircle && (
        <div className="circle" 
        style={{ 
          top: circlePosition.y, 
          left: circlePosition.x, 
          "--bg": bgColor, 
        }} 
        
        ref={circleRef} />

        
      )} {/* .circle */}

    </div> /* .wrapper */

  );
};

export default Selfaware;

