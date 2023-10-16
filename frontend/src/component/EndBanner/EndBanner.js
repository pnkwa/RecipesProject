import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import axios from "axios";
import ViewReq from "./ViewReq";

function EndBanner({ className }) {
  const [reqForm, setReqForm] = useState({
    author: "",
    message: "",
  });
  const [showThankYou, setShowThankYou] = useState(false); // State for showing "Thank you" message
  const [popupOpen, setPopupOpen] = useState(false); // State for controlling the popup

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setReqForm({
      ...reqForm,
      [name]: value,
    });
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const sendRequest = () => {
    const { author, message } = reqForm;
    if (author.trim() === "" || message.trim() === "") {
      alert("Please fill in all required fields");
      return;
    }

    const newReq = {
      author: author,
      message: message,
    };

    axios

      .post(`http://localhost:8000/recipes/admin/req`, newReq)
      .then((response) => {
        console.log("Request created:", response.data);

        setReqForm({
          author: "",
          message: "",
        });

        setShowThankYou(true);
      })
      .catch((error) => {
        console.error("Error creating request:", error);
      });
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
          open={popupOpen}
          onClose={closePopup}
        >
          {(close) => (
            <div className="modal">
              <div className="content">
                {showThankYou ? (
                  <>
                    <StyledThankyou>
                      <h1>Thank you for your request!</h1>
                      <p>Your request has been submitted.</p>
                    </StyledThankyou>
                  </>
                ) : (
                  <>
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
                    {/* link to view */}
                    <ViewReq />
                  </>
                )}
              </div>

              <StyledButtonArea>
                {showThankYou ? (
                  <StyledButtonCancel onClick={() => setShowThankYou(false)}>
                    <i class="fa-solid fa-chevron-left"></i> Go Back
                  </StyledButtonCancel>
                ) : (
                  <>
                    <StyledButton onClick={() => sendRequest()}>
                      Submit
                    </StyledButton>
                    <StyledButtonCancel onClick={() => close()}>
                      Close
                    </StyledButtonCancel>
                  </>
                )}
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

const StyledThankyou = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #e23c34;
`;