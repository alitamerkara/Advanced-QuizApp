import React from "react";
import "./modal.css";

const Modal = ({ score }) => {
  return (
    <div className="modal">
      <div className="lower">
        <h1 className="modal-title">Your score is: {score}</h1>
        <button
          onClick={() => (window.location = "/")}
          className="modal-button"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default Modal;
