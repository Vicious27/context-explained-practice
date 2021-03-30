import React from 'react';
import './App.css';


class App extends React.Component {
  state = {
    user: {},
    step: `1`,
  };

  updateUser = user => {
    this.setState({ user });
  };

  updateStep = (step) => {
    this.setState({ step });
  };

  render() {
    return (
      <div>
        <p>components go here</p>
      </div>
    )
  }
}

export default App;


