import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import axios from "axios";

function EndBanner({ className }) {
  const [reqForm, setReqForm] = useState({
    author: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setReqForm({
      ...reqForm,
      [name]: value,
    });
  };

  // Define the sendRequest function here
  const sendRequest = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/recipes/admin/req",
        {
          author: reqForm.author,
          message: reqForm.message,
        }
      );

      if (response.status === 200) {
        console.log("Message sent successfully!");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };
  return (
    <div className={className}>
      <div className="end_banner">
        <h2>
          "You've been trying to find a recipe, but you can't seem to find it in
          Recipe Box? Tell us!"
        </h2>
        <StyledPopup
          trigger={<StyledButton type="submit">Request recipe</StyledButton>}
          modal
          nested
        >
          {(close) => (
            <div className="modal">
              <div className="content">
                <h1>Request recipe</h1>
                <div>
                  <div>
                    <h3>Name</h3>
                    <StyledInput
                      type="text"
                      name="author"
                      value={reqForm.author}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <h3>Request message</h3>
                    <StyledTextarea
                      rows="4"
                      name="message"
                      value={reqForm.message}
                      onChange={handleInputChange}
                    ></StyledTextarea>
                  </div>
                </div>
              </div>

              <StyledButtonArea>
                <StyledButton onClick={() => sendRequest().then(() => close())}>
                  Submit
                </StyledButton>
                <StyledButtonCancel onClick={() => close()}>
                  Close
                </StyledButtonCancel>
              </StyledButtonArea>
            </div>
          )}
        </StyledPopup>
      </div>
    </div>
  );
}

EndBanner.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(EndBanner)`
  .end_banner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 500px;
    color: #e23c34;
    border-bottom: 1px solid #e23c34;
  }

  .end_banner h2 {
    width: 50%;
  }

  .end_banner button {
    background-color: #e23c34;
    border: 1px solid #e23c34;
    padding: 10px;
    margin: 10px;
    border-radius: 30px;
    width: 150px;
    color: #fff;
    transition: 0.3s ease, color 0.3s ease;
    cursor: pointer;
    font-size: medium;
  }

  .end_banner button:hover {
    background-color: #fdee82;
    border: 1px solid #e23c34;
    color: #e23c34;
  }
`;

const StyledPopup = styled(Popup)`
  &-content {
    color: #e23c34;
    background: #fff;
    width: 70%;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  &-arrow {
    color: #fff;
  }

  &-overlay {
    background: rgba(0, 0, 0, 0.5);
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 2px solid #e23c34;
  border-radius: 5px;
  margin: 10px 0;
  font-size: medium;
  background-color: #fdee82;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 2px solid #e23c34;
  border-radius: 5px;
  margin: 10px 0;
  font-size: medium;
  resize: none;
  background-color: #fdee82;
`;

const StyledButton = styled.button`
  background-color: #e23c34;
  border: 1px solid #e23c34;
  padding: 10px;
  margin: 10px;
  border-radius: 100px;
  width: 150px;
  color: #fff;
  font-size: medium;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #fdee82;
    border: 1px solid #e23c34;
    color: #e23c34;
  }
`;

const StyledButtonCancel = styled.button`
  background-color: #fff;
  border: 1px solid #e23c34;
  color: #e23c34;
  padding: 10px;
  margin: 10px;
  border-radius: 100px;
  width: 150px;
  font-size: medium;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #fdee82;
    border: 1px solid #e23c34;
    color: #e23c34;
  }
`;

const StyledButtonArea = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
