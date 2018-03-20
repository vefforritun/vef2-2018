import React, { Component } from 'react';

class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;

    // height of image
    const height = 98;
    const width = 51;

    return (
      <img src="/cat.png" style={{ position: 'absolute', left: mouse.x - width, top: mouse.y - height }} />
    );
  }
}

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
    console.log(event.clientX, event.clientY)
  }

  render() {
    const style = {
      height: '100vh',
      width: '100vw',
      backgroundColor: 'green'
    }
    return (
      <div style={style} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}

export default class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <Mouse render={mouse => (
          <Cat mouse={mouse} />
        )}/>
      </div>
    );
  }
}
