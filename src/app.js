import React, { useRef, useState } from 'react';

class App extends React.Component {
  constructor() {
    this.ref = React.createRef(null);
  }

  render() {
    return <SecondApp ref={this.ref}></SecondApp>;
  }
}

export default App;

const SecondApp = React.forwardRef((props, ref) => {
  <div ref={ref}></div>;
});
