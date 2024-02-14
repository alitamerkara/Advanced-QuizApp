import React from "react";
import "./dropdown.css";

const Dropdown = ({ difficulty, setChangeDifficulty }) => {
  return (
    <div>
      <select
        onChange={(e) => {
          setChangeDifficulty(e.target.value);
        }}
        name=""
        id=""
        className="select"
      >
        {difficulty.map((item, index) => {
          return <option key={index}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default Dropdown;
