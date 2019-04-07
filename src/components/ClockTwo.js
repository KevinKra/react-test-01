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
    //this.intervalID is stored on this and does not participate in the data flow.
    this.intervalID = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    //We now tear down the interval in this lifecycle method, this frees the resources back up.
    //that way the next time the clock is appended to the DOM we dont have the previous iteration still running**

    //For a React component, this is where you would clean up any of those long running processes that you set up in componentDidMount.
    //In the above data fetching example, all we would have to do is clear the interval so that the weather API would no longer get called every 15 seconds.

    //If the Clock component is ever removed from the DOM, React calls the componentWillUnmount() lifecycle method so the timer is stopped.
    clearInterval(this.intervalID);
  }

  render() {
    return <div>{this.state.time.toLocaleTimeString()}</div>;
  }
}

export default ClockTwo;
