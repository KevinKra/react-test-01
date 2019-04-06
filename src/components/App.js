import React, { Component } from "react";
import "../css/App.css";
import Login from "./Login";

const Title = ({ text }) => <div>{text}</div>;

class App extends Component {
  constructor() {
    super();
    this.state = {
      userName: null
    };
  }
  render() {
    return (
      <div className="mainSection">
        <section className="App">
          <Title text="Practice Playground" />
          <p>
            The intention of this file is to practice various React features
          </p>
        </section>
        <section>
          <Login userName={this.state.userName} />
        </section>
      </div>
    );
  }
}

export default App;
