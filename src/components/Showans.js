import React from "react";
import { useSelector } from "react-redux/es/exports";
import { Redirect } from "react-router-dom";
import "./Showans.css";
function Showans() {
  const islogin = useSelector((state) => state.loginreducer);
  let count = 0;
  const state = useSelector((state) => state.reducer);
  console.log(state);
  state.forEach((element) => {
    console.log("this is a data", element);
    if (element.seleted === element.answer) {
      count++;
    }
  });
  return (
    <>
      {islogin ? (
        <div className="showans-report">You coreect answer is {count}</div>
      ) : (
        <Redirect to="/"></Redirect>
      )}
    </>
  );
}

export default Showans;
