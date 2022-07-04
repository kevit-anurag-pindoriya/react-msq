import "./App.css";
// import From from "./components/Form";
import Quiz from "./components/Quiz";
import Question from "./components/Question";
import Showans from "./components/Showans";
import { Route, Switch } from "react-router-dom";
import From from "./components/Form";

function App() {
  // return <div className="App"><From></From></div>;
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact ><From></From></Route>
        <Route path="/quiz"><Quiz /></Route>
        <Route path="/Showanswer"><Showans></Showans></Route>
      </Switch>


    </div>
  );
}

export default App;
