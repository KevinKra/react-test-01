import React, { Component } from "react";
import "../css/App.css";

const Title = ({ text }) => <div>{text}</div>;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title text="Practice Playground" />
        <p>The intention of this file is to practice various React features</p>
      </div>
    );
  }
}

export default App;
