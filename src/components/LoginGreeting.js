import React from "react";

class Greeting extends React.Component {
  constructor() {
    super();
  }

  render() {
    if (this.props.currentUserName.length > 0) {
      return (
        <div>
          <p>Welcome, {this.props.currentUserName}.</p>
        </div>
      );
    } else {
      return (
        <div>
          <p>Please Log in</p>
        </div>
      );
    }
  }
}

export default Greeting;
