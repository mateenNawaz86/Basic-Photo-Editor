import React from "react";

const Slider = (props) => {
  return (
    <>
      <div className="slider-container">
        <input
          type="range"
          min={props.minVal}
          max={props.maxVal}
          value={props.value}
          onChange={props.changeHandler}
        />
      </div>
    </>
  );
};

export default Slider;
