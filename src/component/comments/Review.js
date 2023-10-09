import React from "react";

function Review() {
  return (
    <>
      <div className="container_review">
        <div className="heading">
          <h2>Reviews</h2>
          <p>(1)</p>
        </div>
        <div className="review_box">
          <div className="name">
            <h3>KwanJaiInwza</h3>
            <div>
              <i className="fa-solid fa-pen-to-square"></i>
              <i className="fa-solid fa-trash"></i>
            </div>
          </div>
          <div className="comment">
            <p>wowwwwwwwww</p>
          </div>
          <div className="count">
            <p>#1</p>
          </div>
        </div>

        <div className="review_box">
          <div className="name">
            <h3>Lucasooocutiecute</h3>
            <div>
              <i className="fa-solid fa-pen-to-square"></i>
              <i className="fa-solid fa-trash"></i>
            </div>
          </div>
          <div className="comment">
            <p>so good very nice recipe, thamks!</p>
          </div>
          <div className="count">
            <p>#2</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Review;
