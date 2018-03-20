import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Fetch extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        longName: PropTypes.string,
        value: PropTypes.number,
      })
    ),
  }

  static defaultProps = {
    data: [],
  }

  render() {
    const { data } = this.props;

    return (
      <section>
        <h2>Gengi</h2>
        {data.map((item, i) => (
          <li key={i}>{item.longName} = {item.value}</li>
        ))}
      </section>
    );
  }
}

