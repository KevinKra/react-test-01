import React, { Component } from "react";
import "../css/App.css";
import Login from "./Login";

const Title = ({ text }) => <div>{text}</div>;

class App extends Component {
  constructor() {
    super();
    this.state = {
      userName: ""
    };
  }

  updateUserName = e => {
    this.setState({
      userName: e.target.value
    });
  };

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
          <Login
            updateUserName={this.updateUserName}
            currentUserName={this.state.userName}
          />
        </section>
      </div>
    );
  }
}

export default App;
