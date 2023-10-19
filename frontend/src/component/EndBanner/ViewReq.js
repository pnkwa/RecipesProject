import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { Link } from "react-router-dom";
import axios from "axios";


export default function ViewReq({ className }) {
  const [req, setReq] = useState([]);

  // get requests
  useEffect(() => {
    axios
      .get(`http://localhost:8000/recipes/admin/req`)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setReq(response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // delete review
  const handleDeleteAllReq = (commentId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete all requests?"
    );
    if (confirmDelete) {
      axios
        .delete(`http://localhost:8000/recipes/admin/req`)
        .then((response) => {
          setReq(response.data);
        })
        .catch((error) => {
          console.error("Error deleting requests:", error);
        });
    }
  };


  return (
    
    <div className={className}>
      <Popup
        trigger={<StyledLink to="/"><i class="fa-solid fa-link"></i> View Requests</StyledLink>}
        modal
        nested
        contentStyle={{
          borderRadius: "10px",
          width: "50%",
        }}
      >
        {(close) => (
          <StyledPopupContent
            
          >
            <div className="req">
              <StyledHeader>
                <h2>Requests</h2>
                <StyledIcon>
                  <i
                    onClick={() => handleDeleteAllReq()}
                    className="fa-solid fa-trash"
                  ></i>
                </StyledIcon>
              </StyledHeader>

              <StyledDetail>
                {req.length === 0 ? (
                  <div>
                    <p> No requests found. <i class="fa-solid fa-face-sad-tear"></i> </p>
                  </div>
                ) : (
                  <div>
                    {req.map((reqItem, index) => (
                      <StyledRequest key={index}>
                        <StyledAuthor>{reqItem.author}</StyledAuthor>
                        <StyledMessage>{reqItem.message}</StyledMessage>
                      </StyledRequest>
                    ))}
                  </div>
                )}
              </StyledDetail>
            </div>
            <StyledButtonGoback onClick={close}>
              <i class="fa-solid fa-chevron-left"></i> Go Back
            </StyledButtonGoback>
          </StyledPopupContent>
        )}
      </Popup>
    </div>
  );
}

const StyledPopupContent = styled.div`
  color: #e23c34;
  padding: 20px;
  background-color: #fff;
`;

const StyledButtonGoback = styled.button`
  background-color: #fff;
  border: 1.5px solid #e23c34;
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
    border: 1.5px solid #e23c34;
    color: #e23c34;
  }
`;

const StyledDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fdee82;
  overflow: auto;
  max-height: 300px;
  padding: 10px;
  table {
    width: 100%; // Ensure the table takes up the full width of the container
  }
  border-radius: 10px;
  margin-top: 10px;

  // Scrollbar styling
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px #f8fbff;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #9fa9bd;
    border-radius: 5px;
  }

  &::-webkit-scrollbar {
    width: 0.5em;
    border-radius: 5px;
  }
`;

const StyledRequest = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-bottom: 20px;
  background-color: #fff;
  border: 2px solid #e23c34;
  border-radius: 10px;
  padding: 20px;
  width: 500px;
  height: auto;
  margin: 10px;
`;

const StyledAuthor = styled.h3`
  font-weight: bold;
  color: #e23c34;
`;

const StyledMessage = styled.p`
  color: #555;
  margin-top: 5px;
  background-color: #f4f0ec;
  width: 400px;
  padding: 5px;
  border-radius: 5px;
  color: #555;
  margin-top: 5px;
  background-color: #f4f0ec;
  padding: 5px;
  border-radius: 5px;
  overflow-wrap: break-word;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledIcon = styled.i`
  cursor: pointer;
  transition: 0.3s ease, color 0.3s ease;
  padding: 10px;
  border-radius: 3px;
  &:hover {
    background-color: #f4f0ec;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none; // Remove underline
  color: #808080; // Your desired link color
  font-weight: bold; // Optional
  // Add any other styles you want

  &:hover {
    color: #e23c34;
    text-decoration: underline;
    cursor: pointer;
    transition: 0.3s ease, color 0.3s ease;
  }
`;