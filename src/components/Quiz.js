import React from "react";
import { useState } from "react";
import Question from "./Question";

function Quiz() {
  const [qutitionCount, setQutionCount] = useState(1);
  const limit = 7;
  return (
    <>
    <button>==={qutitionCount}===</button>
      {qutitionCount>1 && <button onClick={()=>setQutionCount(qutitionCount - 1)}>Privious</button>}
      {qutitionCount<limit && <button onClick={()=>setQutionCount(qutitionCount + 1)}>Next</button>}
      <Question question={qutitionCount}></Question>
    </>
  );
}

export default Quiz;
