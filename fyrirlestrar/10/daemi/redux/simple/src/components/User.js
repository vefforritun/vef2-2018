import React, { Component } from 'react';
import { connect } from 'react-redux';

class User extends Component {
  render() {
    const { name, age } = this.props;

    return (
      <p>Nafn: {name}, aldur: {age}</p>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.profile.name,
    age: state.profile.age,
  }
}

export default connect(mapStateToProps)(User);
