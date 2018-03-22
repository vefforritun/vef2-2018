import React, { Component } from 'react';

class CustomTextInput extends Component {

  focusTextInput = () => {
    this.input.focus();
  }

  render() {
    return (
      <div>
        <input
          type="text"
          ref={(input) => { this.input = input; }} />
        <button onClick={this.focusTextInput}>
          focus
        </button>
      </div>
    );
  }
}

class UncontrolledForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    alert('Name: ' + this.input.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          defaultValue="Bob"
          type="text"
          ref={(input) => this.input = input} />
        <button>Submit</button>
      </form>
    );
  }
}

class FileInput extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();
    alert(`File = ${this.fileInput.files[0].name}`);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        File:
        <input
          type="file"
          ref={input => {
              this.fileInput = input;
            }}
          />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

class Video extends Component {

  onMouseOver = () => {
    this.video.play();
  }

  onMouseOut = () => {
    this.video.pause();
  }

  render() {
    return (
      <video
        src="/bunny.mp4"
        paused
        ref={(v) => { this.video = v; }}
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
      />
    );
  }
}

const html = 'First &middot; Second';

class App extends Component {
  render() {
    return (
      <div>
        <CustomTextInput />
        <br />
        <div dangerouslySetInnerHTML={{__html: html}} />
        <br />
        <UncontrolledForm />
        <br />
        <FileInput />
        <br />
        <Video />
      </div>
    );
  }
}

export default App;
