import React, { Component } from 'react';

function Children(props) {
  const { children } = props;

  console.group('Child');
  console.log('Type:', typeof children);
  console.log('Is array?', Array.isArray(children));
  console.log('Value:', children);



  console.groupEnd();

  return (
    <p>
      {children || null}
    </p>
  );
}

function Childrens(props) {
  const { children } = props;
  const childrenAsArray =
    React.Children.toArray(children);

  console.log(children, childrenAsArray)

  return (
    <div>
      <p>Fjöldi barna: {React.Children.count(children)}</p>
      <p>Börn ítruð:</p>
      {React.Children.map(children, child => child)}
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div>
        <Children/>
        <Children></Children>
        <Children>Halló heimur!</Children>
        <Children>
          <span>Halló heimur!</span>
        </Children>
        <Children>
          <span>Hæ</span>
          <span>Bæ</span>
        </Children>

        <hr />

        <Childrens />
        <Childrens>foo</Childrens>
        <Childrens>
          <span>Hæ</span>
          <span>Bæ</span>
        </Childrens>
      </div>
    );
  }
}

export default App;
