import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function NotFound({ className }) {
  return (
    <div className={className}>
      <div className="NotFoundPage">
        <h1>404 NOT FOUND</h1>
      </div>
    </div>
  );
}

NotFound.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(NotFound)`
  .NotFoundPage {
    height: 100vh;
    background-color: #f4efdc;
    color: #e23c34;
  }
  .NotFoundPage h1 {
    margin: 0;
    padding: 0;
    position: fixed;
    font-size: 75px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
