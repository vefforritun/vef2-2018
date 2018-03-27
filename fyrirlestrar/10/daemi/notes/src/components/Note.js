import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Note.css';

export default class Note extends Component {
  static propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    visible: PropTypes.bool,
    datetime: PropTypes.string,
    onHeaderClick: PropTypes.func,
  }

  static defaultProps = {
    visible: true,
    onHeaderClick: () => {},
  }

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
