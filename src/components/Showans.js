import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useState } from "react";
import "./Showans.css";
function Showans() {
  const [ans, setAns] = useState(0);
  let count = 0;
  const state = useSelector((state) => state);
  console.log(state);
  state.forEach((element) => {
    console.log("this is a data", element);
    if (element.seleted === element.answer) {
      count++;
    }
  });
  return <div className="showans-report">You coreect answer is {count}</div>;
}

export default Showans;
