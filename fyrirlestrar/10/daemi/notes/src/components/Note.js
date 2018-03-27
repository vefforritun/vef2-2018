import React, { Component } from 'react';

import './Note.css';

export default class Note extends Component {
  render() {
    const { onHeaderClick, title, visible, text, datetime } = this.props;

    return (
      <li className="note">
        <h3 onClick={onHeaderClick} className="note__header">{title}</h3>
        {visible && (
          <div>
            <p>{text}</p>
            <p>{datetime}</p>
          </div>
        )}
      </li>
    );
  }
}
