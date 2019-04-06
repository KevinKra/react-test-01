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
        <LoginGreeting currentUserName={this.props.currentUserName} />
        <div className="userInputs">
          <label htmlFor="username">
            Username:
            <input
              type="text"
              name="username"
              onBlur={this.props.updateUserName}
            />
          </label>
          <label htmlFor="password">
            Password:
            <input type="password" name="password" />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Login;
