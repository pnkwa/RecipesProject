import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import axios from "axios";

function TimeSlider({ className }) {
  const sliderRef = useRef(null);
  const outputRef = useRef(null);
  const [sliderValue, setSliderValue] = useState(30);
  const [data, setData] = useState([]);
  const baseURL = "http://127.0.0.1:8000/recipes";

  useEffect(() => {
    const slider = sliderRef.current;
    const output = outputRef.current;

    if (slider && output) {
      slider.addEventListener("input", handleSliderChange);
      return () => slider.removeEventListener("input", handleSliderChange);
    }
  }, []);

  useEffect(() => {
    const apiURL = `${baseURL}?total=${sliderValue}`;
    axios
      .get(apiURL)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [sliderValue]);

  const handleSliderChange = () => {
    const slider = sliderRef.current;
    const output = outputRef.current;

    if (slider && output) {
      var value =
        ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
      var color =
        "linear-gradient(to right, #e23c34 0%, #e23c34 " +
        value +
        "%, #d3d3d3 " +
        value +
        "%, #d3d3d3 100%)";
      slider.style.background = color;
      output.innerHTML = slider.value;
      setSliderValue(slider.value);
    }
  };

  return (
    <div className={className}>
      <div className="time">
        <label>
          <h2>Time</h2>
        </label>

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
    </div>
  );
}

TimeSlider.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(TimeSlider)`
  .time {
    border-bottom: 1px solid #e23c34;
    margin-right: 50px;
    padding: 10px 0 10px 0;
  }
  .slider-container {
    width: 100%;
    text-align: center;
  }

  .slider {
    -webkit-appearance: none;
    width: 100%;
    height: 5px;
    border-radius: 5px;
    background: linear-gradient(
      to right,
      #e23c34 0%,
      #e23c34 20%,
      #d3d3d3 0%,
      #d3d3d3 100%
    );
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
  }

  .slider:hover {
    opacity: 1;
  }
  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1px solid #fff;
    background: #e23c34;
    cursor: pointer;
  }
  .slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #e23c34;
    cursor: pointer;
  }
`;
