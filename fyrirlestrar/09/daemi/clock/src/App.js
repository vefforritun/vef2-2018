import React, { Component } from 'react';

class Clock extends Component {
  state = { date: new Date() }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    const date = new Date();
    this.setState({ date });
  }

  render() {
    return (
      <div>
        <p>{this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Clock />
      </div>
    );
  }
}

export default App;
