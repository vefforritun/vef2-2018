import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions/notes';

class Login extends Component {
  state = {
    title: '',
    text: '',
    datetime: '',
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name) {
      this.setState({ [name]: value });
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { dispatch } = this.props;
    const { title, text, datetime } = this.state;

    dispatch(addNote(title, text, datetime));
  }

  render() {
    const { title, text, datetime } = this.state;
    const { isAdding, errors } = this.props;

    if (isAdding) {
      return (
        <p>Skrái atriði...</p>
      );
    }

    return (
      <div>
        {errors && (
          <ul>{errors.map((error, i) => (
            <li key={i}>
              {error.message}
            </li>
          ))}</ul>
        )}

        <form onSubmit={this.handleSubmit}>

        <div>
          <label htmlFor="title">Titill:</label>
          <input id="title" type="text" name="title" value={title} onChange={this.handleInputChange} />
        </div>

          <div>
            <label htmlFor="text">Texti:</label>
            <input id="text" type="text" name="text" value={text} onChange={this.handleInputChange} />
          </div>

          <div>
            <label htmlFor="date">Dags:</label>
            <input id="date" type="text" name="datetime" value={datetime} onChange={this.handleInputChange} />
          </div>

          <button disabled={isAdding}>Skrá</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAdding: state.notes.isAdding,
    errors: state.notes.errors,
  }
}

export default connect(mapStateToProps)(Login);
