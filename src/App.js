import React from 'react';
import './App.css';

class App extends React.Component {
  render() {

    const generalInfoChildren = [
      <TextInput label='First Name' name='first_name' placeholder='John' required={true} />,
      <TextInput label='Family Name' name='family_name' placeholder='Smith' required={false} />,
    ];

    return (
      <div className="App">
        <h2>Apply now</h2>
        <FieldSet legend='General Information' childInputs={generalInfoChildren} />
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
        {childInputs}
      </fieldset>
    );
  }
}

class TextInput extends React.Component {
  render() {
    let { label, name, placeholder, required } = { ...this.props };
    return(
      <div className='text-input-container'>
        <label htmlFor={name} className='text-input-label'>{label}</label>
        <input id={name} type='text' className='text-input' placeholder={placeholder} required={required}/>
      </div>
    );
  }
}

export default App;
