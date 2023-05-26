/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef, useCallback } from "react";

//fomulas 
function getRandomPosition(wrapperWidth, wrapperHeight, size) {
  const numColumns = Math.floor(wrapperWidth / size);
  const numRows = Math.floor(wrapperHeight / size);
  const numBoxes = numColumns * numRows;

  const positions = new Set();
  const getRandomCoordinate = (max) => Math.floor(Math.random() * max) * size;

  while (positions.size < numBoxes) {
    const left = getRandomCoordinate(numColumns);
    const top = getRandomCoordinate(numRows);
    positions.add(`${left},${top}`);
  }

  return Array.from(positions).map((position) => {
    const [left, top] = position.split(",");
    return { left: parseInt(left), top: parseInt(top) };
  });
}

//component
const Selfaware = () => {

  //variables
  const letters = ["m", "i", "n", "y", "e", "o"];
  const [boxPositions, setBoxPositions] = useState([]);
  const wrapper = useRef(null)
  const cloneRef = useRef(null)
  const [newWrapWidth, setNewWrapWidth] = useState(0);
  const [newWrapHeight, setNewWrapHeight] = useState(0);
  const [newDivWidth, setNewDivWidth] = useState(0);

  //console.log(cloneRef.current) // this is null

  //actual functions
  const randomlyPosition = useCallback(() => {
    const positions = getRandomPosition(newWrapWidth, newWrapHeight, 130);
    setBoxPositions(positions.slice(0, 6));
  },[newWrapWidth, newWrapHeight])

  const handleClick = () => {
    randomlyPosition()
  }

  useEffect(() => {
    //update variable
    setNewWrapWidth(wrapper.current.offsetWidth)
    setNewWrapHeight(wrapper.current.offsetHeight)
    randomlyPosition()

  }, [newWrapWidth, newWrapHeight, randomlyPosition]);

  return (
    <div className="wrapper" ref={wrapper}>
      {boxPositions.map((position, index) => (
        <div
          className="clone"
          key={index}
          style={{ left: position.left, top: position.top }}
          ref={cloneRef}
          onClick={handleClick}
        >
          <span> {letters[index]}</span>
         
        </div>
      ))}
    </div>
  );
};

export default Selfaware;
