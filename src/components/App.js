import React, { Component } from "react";
import Login from "./Login";
import Clock from "./Clock";
import PropTypes from "prop-types";
import "../css/App.css";

const Title = ({ text }) => <div>{text}</div>;

class App extends Component {
  constructor() {
    super();
    this.state = {
      userName: ""
    };
  }

  // keep working on utilizing propTypes
  static propTypes = {
    userName: PropTypes.string.isRequired
  };

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
          <Clock />
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
