import React from "react";

//this clock uses the approach derived from the reactjs documentation
class ClockTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
  }

  tick = () => {
    this.setState({ time: new Date() });
  };

  componentDidMount() {
    this.intervalID = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    return <div>{this.state.time.toLocaleTimeString()}</div>;
  }
}

export default ClockTwo;
