import React from "react";
import LoginGreeting from "./LoginGreeting";
import "../css/Login.css";
class Login extends React.Component {
  constructor() {
    super();
  }
  //1. Capture userName input and update App state
  //2. Conditionally render LoginGreeting if there is a userName
  render() {
    return (
      <form className="logIn">
        <LoginGreeting />
        <div className="userInputs">
          <label htmlFor="username">
            Username:
            <input type="text" name="username" />
          </label>
          <label htmlFor="password">
            Password:
            <input type="text" />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Login;
