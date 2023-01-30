import React from 'react';
import './App.css';

class App extends React.Component {
  render() {

    const generalInfoInputs = [
      <LabelledInput type='text' key='first_name' label='First Name' name='first_name' placeholder='John' required={true} />,
      <LabelledInput type='text' key='family_name' label='Family Name' name='family_name' placeholder='Smith' required={true} />,
      <LabelledInput type='tel' key='phone_number' label='Contact Phone Number' name='phone_number' placeholder='+1 438 283 1211' required={true} />,
      <LabelledInput type='tel' key='phone_number2' label='Concact Phone Number (optional)' name='phone_number2' placeholder='+1 438 283 1211' required={false} />,
      <LabelledInput type='email'key='email' label='Email' name='email' placeholder='johnsmith@example.com' required={true} />,
    ];

    const educationInfoInputs = [
      <LabelledInput type='text' key='title' label='Title' name='title' require={true} />,
      <LabelledInput type='text' key='institution' label='Institution' name='institution' require={true} />,
      <LabelledInput type='date' key='start-date' label='Start' name='start-date' require={true} />,
      <LabelledInput type='date' key='end-date' label='End' name='end-date' require={true} />,
    ];

    return (
      <div className="App">
        <h2>Apply now</h2>
        <FieldSet legend='General Information' childInputs={generalInfoInputs} />
        <FieldSet legend='Education' childInputs={educationInfoInputs} />
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
    return (
      <div className={`${type}-input-container`}>
        <label htmlFor={name} className={`${type}-input-label`}>{label}</label>
        <input type={type} id={name} className={`${type}-input`} placeholder={placeholder} required={required}/>
      </div>
    );
  }
}

export default App;
