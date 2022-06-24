import React from "react";
import "./Form.css";

function From() {
  return (
    <>
      <div className="form">
        <label htmlFor="name">Enter Name :-- </label>
        <input type="text" id="name"></input>

        <div className="radio">
          <label>
            Select Gender : --
            <select>
              <option>Male</option>
              <option>Female</option>
            </select>
          </label>
        </div>
        <div className="button">
         <button>Let's beging </button>
        </div>
      </div>
    </>
  );
}

export default From;
