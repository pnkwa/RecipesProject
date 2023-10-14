
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";
import React, { useState, useEffect } from 'react';

function Banner({ className }) {

  const [slideIndex, setSlideIndex] = useState(1);
  const [slideImages, setSlideImages] = useState([]);

  useEffect(() => {
    // Load all slide images from a directory (e.g., 'slideshow') dynamically
    const context = require.context(
      '/public/images/slideshow',
      false,
      /\.(png|jpe?g|svg)$/
    );
    const images = context.keys().map(context);
    setSlideImages(images);
  }, []);

  function plusSlides(n) {
    let newIndex = slideIndex + n;
    if (newIndex > slideImages.length) {
      newIndex = 1;
    } else if (newIndex < 1) {
      newIndex = slideImages.length;
    }
    setSlideIndex(newIndex);
  }

  // Automatically advance to the next slide every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      plusSlides(1);
    }, 3000); // Change the duration here (in milliseconds) for the desired interval
    return () => clearInterval(intervalId);
  }, [slideIndex, plusSlides]); // Include plusSlides as a dependency



  return (
    <div className={className}>
      <div className="banner">
        <div className="trailer">
          <h1>Welcome to RecipeBox!</h1>
          <h2>
            "your culinary paradise where you'll discover
            a world of delectable dishes, step-by-step cooking guides, and a community of food lovers"
          </h2>
          <a href="#scoll">Explore</a>
        </div>
        <div className="slideshow">
          {/* <img src="../images/recipe/steak.jpg" alt="img" /> */}
          <SlideshowContainer>

        {slideImages.map((imageSrc, index) => (
          <MySlides
            key={index}
            style={slideIndex === index + 1 ? { display: 'block' } : {}}
          >
            <Img src={imageSrc} alt={`Slide ${index + 1}`} />
          </MySlides>
        ))}
        <Prev onClick={() => plusSlides(-1)}>❮</Prev>
        <Next onClick={() => plusSlides(1)}>❯</Next>
      </SlideshowContainer>
        </div>
      </div>
    </div>
  );
}

Banner.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(Banner)`
  .banner {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    padding-top: 50px;
    padding-bottom: 50px;
    height: 550px;
    border-bottom: 1px solid #e23c34;
    border-top: 1px solid #e23c34;
  }
  .trailer {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px;
    color: #e23c34;
  }
  .trailer a {
    background-color: #e23c34;
    border: 1px solid #e23c34;
    text-decoration: none;
    padding: 10px;
    border-radius: 30px;
    width: 150px;
    color: #fff;
    transition: 0.3s ease, color 0.3s ease;
    cursor: pointer;
    font-size: medium;
  }
  .trailer a:hover {
    background-color: #fdee82;
    border: 1px solid #e23c34;
    color: #e23c34;
  }

  .trailer h2 {
    font-weight: normal;
    padding: 10px;
  }

  .slideshow {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .slideshow img {
    min-width: 100%;
    min-height: 100%;
    width: 1500px;
    height: 500px;
    object-fit: contain;
  }
`;

const SlideshowContainer = styled.div`

  margin: auto;
`;

const FadeAnimation = keyframes`
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
`;

const MySlides = styled.div`
  display: none;
  animation-name: ${FadeAnimation};
  animation-duration: 1.5s;
  width: 100%;
`;

const Img = styled.img`
  vertical-align: middle;
  width: 100%;
  height: 625px;
  object-fit: cover;
  transition: all ease 1.5s;
`;


const Prev = styled.a`
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  left: 0;
  border-radius: 3px 0 0 3px;

  &:hover {
    background-color: #e23c34;
  }
`;

const Next = styled.a`
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  right: 0;
  border-radius: 3px 0 0 3px;

  &:hover {
    background-color: #e23c34;
  }
`;
