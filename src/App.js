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
      <LabelledInput type='text' key='title' label='Title' name='title' required={true} />,
      <LabelledInput type='text' key='institution' label='Institution' name='institution' required={true} />,
      <LabelledInput type='date' key='start-date' label='Start' name='start-date' required={true} />,
      <LabelledInput type='date' key='end-date' label='End' name='end-date' required={true} />,
    ];

    const workExpInputs = [
      <LabelledInput type='text' key='position' label='Position' name='position' required={true} />,
      <LabelledInput type='text' key='company' label='Company' name='company' required={true} />,
      <LabeleedTextarea key='description' label='Job Description' name='description' required={false} />,
      <LabelledInput type='date' key='start-date' label='Start' name='start-date' required={true} />,
      <LabelledInput type='date' key='end-date' label='End' name='end-date' required={true} />,
    ];

    return (
      <div className="App">
        <h2>Apply now</h2>
        <form id="apply-form" name="apply-form" action="" method="get">
          <FieldSet legend='General Information' childInputs={generalInfoInputs} />
          <FieldSet legend='Education' childInputs={educationInfoInputs} />
          <FieldSet legend='Work Experience' childInputs={workExpInputs} />
        </form>
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

class LabeleedTextarea extends React.Component {
  render() {
    let { label, name, placeholder, required } = { ...this.props };
    return (
      <div className='textarea-input-container'>
        <label htmlFor={name} className='textarea-input-label'>{label}</label>
        <textarea id={name} className='textarea-input' placeholder={placeholder} required={required}></textarea>
      </div>
    );
  }
}

export default App;
