import React from "react";
import { useState } from "react";
import Question from "./Question";
import { useLocation } from "react-router-dom";
import { Redirect, Link } from "react-router-dom";
import "./Quiz.css";
import Showans from "./Showans";

function Quiz() {
  const loaction = useLocation();
  console.log("location is ", loaction);
  const [qutitionCount, setQutionCount] = useState(1);
  const limit = 7;

  return (
    <>
      <div className="quiz__qutitioncount">{qutitionCount}</div>
      <Question
        question={qutitionCount}
        language={loaction.state.language}
      ></Question>
      <div className="quiz-navbutton">
        {qutitionCount > 1 && (
          <button
            className="quiz-navbutton-button privious"
            onClick={() => setQutionCount(qutitionCount - 1)}
          >
            Privious
          </button>
        )}
        {qutitionCount < limit && (
          <button
            className="quiz-navbutton-button next"
            onClick={() => setQutionCount(qutitionCount + 1)}
          >
            Next
          </button>
        )}
      </div>
    <div className="quiz-showanswer">
    {qutitionCount == limit && (
        <Link to="/Showanswer">
          <button className="quiz-showanswer-button">Show me</button>
        </Link>
      )}
    </div>
    </>
  );
}

export default Quiz;
