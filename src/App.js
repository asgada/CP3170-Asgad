import React from "react";
import "./App.css";
import Exercise1 from "./Exercise1";
import Exercise2 from "./Exercise2";
import Exercise4 from "./Exercise4";
import Exercise5 from "./Exercise5";


class App extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <Exercise1 />
        <br/>
        <Exercise2 />
        <br/>
        <Exercise4 />
        <br/>
        <Exercise5 />
      </div>
    );
  }
}

export default App;
