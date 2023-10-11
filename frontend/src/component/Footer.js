import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function Footer({ className }) {
  return (
    <div className={className}>
      <footer>
        <div class="slo_1">
          <p>Make us a part of your lifestyle</p>
          <i class="fa-brands fa-square-facebook"></i>
          <i class="fa-brands fa-instagram"></i>
        </div>
        <div class="slo_2">
          <p>A taste of home in every dish</p>
        </div>
      </footer>
    </div>
  );
}

Footer.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(Footer)`
  footer {
    left: 0;
    bottom: 0;
    width: 100%;
    height: 20px;
    color: #e23c34;
    display: flex;
    justify-content: space-between;
    background-color: #f4efdc;
    transition: all ease 0.5s;
    padding: 30px 0 30px 0;
  }

  footer .slo_1 {
    text-align: left;
  }
  footer .slo_1 i {
    padding-right: 5px;
    font-weight: 500;
  }

  footer .slo_2 {
    text-align: center;
    width: 150px;
  }
`;
