import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function Comment({ className }) {
  return (
    <div className={className}>
      <div className="container_comment">
        <h2>Comment</h2>
        <div className="comment_box">
          <div className="typename">
            <input type="text" placeholder="Type name..." />
          </div>
          <div className="typecomment">
            <textarea placeholder="Type something...."></textarea>
          </div>
          <div className="button">
            <button type="button">Post now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

Comment.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(Comment)`
  .container_comment {
    color: #e23c34;
    margin-bottom: 50px;
  }
  .container_comment h2 {
    margin-bottom: 10px;
  }
  .comment_box {
    padding: 20px;
    background-color: #ffffff;
    padding-bottom: 80px;
  }
  .comment_box .typename {
    width: 100%;
    height: 50px;
    background: #fdee82;
    display: flex;
    justify-content: center;
    border: 1px solid #e23c34;
  }
  .comment_box .typecomment {
    width: 100%;
    height: 100px;
    background: #fdee82;
    border: 1px solid #e23c34;
    margin: 20px 0 20px 0;
    display: flex;
    padding-top: 20px;
  }
  .comment_box input,
  textarea {
    background: transparent;
    width: auto;
    flex: 1;
    border: 0;
    outline: none;
    font-size: 15px;
    font-family: "Inter", sans-serif;
    color: #e23c34;
    padding-left: 20px;
  }
  .typename,
  .comment_box ::placeholder {
    color: #e23c34;
  }
  .comment_box .button {
    position: absolute;
    right: 40px;
    transform: translateY(-80%);
    margin-top: 50px;
    margin-right: 18px;
  }
  .comment_box button {
    background-color: #e23c34;
    border: 1px solid #e23c34;
    padding: 10px;
    margin: 10px;
    border-radius: 30px;
    width: 130px;
    color: #fff;
    transition: 0.3s ease, color 0.3s ease;
    cursor: pointer;
    font-size: medium;
  }
  .comment_box button:hover {
    background-color: #fdee82;
    border: 1px solid #e23c34;
    color: #e23c34;
  }
`;