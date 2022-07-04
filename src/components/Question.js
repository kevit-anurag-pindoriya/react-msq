import React, { useState } from "react";
import { English } from "./QuizData";
import SelectAnswer from "./SelectAnswer";
import { useDispatch } from "react-redux/es/exports";
import { add } from "../redux/action";
import { Redirect } from "react-router-dom";
import { Gujarati } from "./QuizData";
import "./Question.css";
function Question(props) {
  const dispatch = useDispatch();
  let engdata = English;
  if (props.language == "Gujarati") {
    console.log("Gujarati seleted====================");
    engdata = Gujarati;
  } else {
    console.log("English seleted====================");
    engdata = English;
  }
  const [answer, setAnswer] = useState([]);
  const questionNumber = props.question - 1;
  console.log(props.language[questionNumber].option);
  console.log("Lanuage is ", props.language);
  console.log(" you selected " + answer);
  //   const [answerStatus, setAnswerStatus] = useState(true);
  return (
    <>
      <div className="question-all">
        <div className="question-all__div">
          <p>{engdata[questionNumber].quation}</p>
        </div>
        <div className="question-all__option-all">
          {engdata[questionNumber].option.map((data) => {
            return (
              <div className="option" key={data.key}>
                <button
                className="option-button"
                  onClick={() => {
                    alert("You seleted option :- [  " + data.value + "  ]");
                    dispatch(
                      add({
                        seleted: data.key,
                        answer: engdata[questionNumber].ans,
                        index: questionNumber,
                      })
                    );
                  }}
                >
                  {data.value}
                </button>
                <br></br>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Question;
