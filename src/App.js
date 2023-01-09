import React from 'react';
import './App.css';

class App extends React.Component {
  render() {

    const generalInfoChildren = [
      <LabelledInput type='text' label='First Name' name='first_name' placeholder='John' required={true} />,
      <LabelledInput type='text' label='Family Name' name='family_name' placeholder='Smith' required={false} />,
      <LabelledInput type='tel' label='Contact Phone Number' name='phone_number1' placeholder='+1 438 283 1211' required={true} />
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

class LabelledInput extends React.Component {
  render() {
    let { type, label, name, placeholder, required } = { ...this.props };
    return(
      <div className='text-input-container'>
        <label htmlFor={name} className='text-input-label'>{label}</label>
        <input type={type} id={name} type='text' className='text-input' placeholder={placeholder} required={required}/>
      </div>
    );
  }
}

export default App;
