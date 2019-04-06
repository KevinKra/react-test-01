import React from 'react';

class Login extends React.Component {
  constructor() {
    super()
  }
  render() {
    return() {
      <form className="logIn">
        <label htmlFor="username">
          <input type="text" name="username"/>
             </label>
        <label htmlFor="password"><input type="text"/></label>
      </form>
    }
  }
}

export default Login;