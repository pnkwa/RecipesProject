import React, { useRef, useEffect, useState } from 'react';

function TimeSlider() {
  const sliderRef = useRef(null);
  const outputRef = useRef(null);
  const [sliderValue, setSliderValue] = useState(30);

  useEffect(() => {
    const slider = sliderRef.current;
    const output = outputRef.current;

    if (slider && output) {
      slider.oninput = function () {
        var value =
          ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
        var color =
          "linear-gradient(to right, #e23c34 0%, #e23c34 " +
          value +
          "%, #d3d3d3 " +
          value +
          "%, #d3d3d3 100%)";
        slider.style.background = color;
        output.innerHTML = this.value;

        setSliderValue(this.value);
      };
    }
  }, []);

  return (
    <div className="time">
      <h2>Time</h2>
      <div className="slider-container">
        <input
          type="range"
          min="0"
          max="180"
          value={sliderValue}
          className="slider"
          ref={sliderRef}
        />
        <p>
          <span ref={outputRef}>30</span> min
        </p>
      </div>
    </div>
  );
}

export default TimeSlider;
