import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>Apply now</h2>
        <FieldSet legend='General Information' />
      </div>
    );
  };
}

class FieldSet extends React.Component {
  render() {
    const { legend, childInputs } = { ...this.props };
    return (
      <fieldset>
        <legend>{legend}</legend>
      </fieldset>
    );
  }
}

export default App;
