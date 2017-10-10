import React, {Component} from 'react'

// Material UI components
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';

var style = {
  main_form: {
    width: '100%',
    height: '100vh',
    // boxShadow: '0 0 4px 0 rgba(0, 0, 0, 0.3)',
    padding: 5,
  },
  form_section: {
    margin: '20px 0 0 0',
    borderTop: '2px solid #9756A2',
    paddingTop: 10,

  },
  input: {
    margin: 5,
  },
  section_header: {
    fontSize: 14,
    textAlign: 'center',
    borderBottom: '1px solid lightgray',
    paddingBottom: 5,
    margin: '10px 0 10px 0',
    textTransform: 'capitalize'
  },
  subtext: {
    color: 'gray',
    fontSize: '10px',
    marginTop: '-5px',
    textAlign: 'center'
  },
  cuisine_style: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap'
  },
  c_option: {
    display: 'inline'
  }
}

class GroupForm extends Component {
  render() {
    return (
      <div style={style.main_form}>
        <p>We need a little information about you to get started.</p>
        <p>Information is only stored as long as your group is active. Once you reach a decision all the information is deleted.</p>
        <div style={style.form_section}>
          <p style={style.section_header}>Basic Information</p>
          <p style={style.subtext}>Name is required. Either email or phone number is required.</p>
          <TextField
            style={style.input}
            hintText="Name"
            fullWidth={true}
          />
          <TextField
            style={style.input}
            hintText="Email"
            fullWidth={true}
          />
          <TextField
            style={style.input}
            hintText="Phone"
            fullWidth={true}
          />
          <p style={style.section_header}>Restaurant Options</p>
          <div style={style.cuisine_type}>

          </div>
        </div>
      </div>
    )
  }
}

export default GroupForm
