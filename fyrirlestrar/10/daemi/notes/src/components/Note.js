import React, { Component } from 'react';

export default class Note extends Component {
  state = {
    hidden: true
  }

  click = () => {
    this.setState((prevState) => ({ hidden: !prevState.hidden }))
  }

  render() {
    const display = this.props.visible ? 'none' : 'block';

    return (
      <li>
        <h3 onClick={this.props.onHeaderClick}>{this.props.title}</h3>
        <div style={{display}}>
          <p>{this.props.text}</p>
          <p>{this.props.datetime}</p>
        </div>
      </li>
    );
  }
}
