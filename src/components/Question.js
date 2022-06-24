import React, { useState } from "react";
import { Engdata } from "./QuizData";
import SelectAnswer from "./SelectAnswer";

function Question(props) {
  const engdata = Engdata;
  const [answer, setAnswer] = useState([]);
  const questionNumber = props.question - 1;
  console.log(engdata[questionNumber].option);
  console.log(" you selected " + answer);
  //   const [answerStatus, setAnswerStatus] = useState(true);
  return (
    <>
      <div>
        <p>{engdata[questionNumber].quation}</p>
      </div>

      {engdata[questionNumber].option.map((data) => {
        return (
          <div key={data.key}>
            <div className="option">
              <button
                onClick={() => {
                  setAnswer(...answer, data.key);
                }}
              >
                {data.value}
              </button>
            </div>
            <br></br>
          </div>
        );
      })}
      {/* <SelectAnswer position={questionNumber} answer={answer}></SelectAnswer> */}
    </>
  );
}

export default Question;
