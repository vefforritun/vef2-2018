import React, { Component } from 'react';

function jsx() {
  return (<h1>Hello world!</h1>);
}

const xss = '<script>alert(1)</script>';

const img = {
  url: 'https://www.hi.is/sites/default/files/drupal/pallas_vert.svg',
}

const element = React.createElement(
  "h1",
  { className: "greeting" },
  React.createElement(
    "span",
    null,
    "Hello, world!"
  )
);

class App extends Component {
  render() {
    return (
      <div>
        <p>Testing {[1, 2, 3].join(', ')}</p>

        <p>{jsx()}</p>

        <p className="foo" foo="bar" bar={3 * 3}>bar</p>

        <p>{xss}</p>

        <img src={img.url} className="image" />

        <h1 className="greeting">
          <span>Hello, world!</span>
        </h1>

        {element}
      </div>
    );
  }
}

export default App;
