import React from "react";

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTime: new Date().toLocaleTimeString()
    };
  }
  clock = () => {
    //make sure you are invoking toLocaleTimeString()
    this.setState({ currentTime: new Date().toLocaleTimeString() });
  };
  componentDidMount() {
    //dont call the callback
    this.intervalId = setInterval(this.clock, 1000);
  }

  render() {
    return <div>{this.state.currentTime}</div>;
  }
}

export default Clock;
