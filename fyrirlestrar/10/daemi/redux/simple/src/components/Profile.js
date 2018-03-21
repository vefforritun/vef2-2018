import React, { Component } from 'react';
import { connect } from 'react-redux';
import { update } from '../actions/profile';

class Profile extends Component {
  state = {
    name: '',
    age: '',
  }

  onChange = (e) => {
    const { name, value } = e.target;

    if (name) {
      this.setState({ [name]: value });
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { name, age } = this.state;
    const { dispatch } = this.props;

    dispatch(update(name, age));
  }

  componentWillReceiveProps(nextProps) {
    const { name, age } = nextProps;
    this.setState({ name, age });
  }

  render() {
    const { name, age } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <label>
          Nafn
          <input type="text" name="name" value={name} onChange={this.onChange} />
        </label>
        <label>
          Aldur
          <input type="number" name="age" value={age} onChange={this.onChange} />
        </label>
        <button>Breyta</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.profile.name,
    age: state.profile.age,
  }
}

export default connect(mapStateToProps)(Profile);
