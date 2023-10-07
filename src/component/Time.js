import React, { useRef } from "react";

export default function Time() {
  const myRangeRef = useRef(null);
  const sliderValueRef = useRef(null);

  var slider = document.getElementById("myRange");
  var output = document.getElementById("sliderValue");

  slider.oninput = function () {
    var value = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
    var color =
      "linear-gradient(to right, #e23c34 0%, #e23c34 " +
      value +
      "%, #d3d3d3 " +
      value +
      "%, #d3d3d3 100%)";
    slider.style.background = color;
    output.innerHTML = this.value;
  };

  return (
    <div class="time">
      <h2>Time</h2>
      <div class="slider-container">
        <input
          type="range"
          min="0"
          max="180"
          value="30"
          class="slider"
          id="myRange"
          ref={myRangeRef}
        />
        <p>
          <span id="sliderValue">30</span> min
        </p>
      </div>
    </div>
  );
}
