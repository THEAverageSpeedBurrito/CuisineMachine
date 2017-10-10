import React, {Component} from 'react'

// Material UI components
import TextField from 'material-ui/TextField';

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

  }
}

class GroupForm extends Component {
  render() {
    return (
      <div style={style.main_form}>
      <p>We need a little information about you to get started.</p>
      <p>Information is only stored as long as your group is active. Once you reach a decision all the information is deleted.</p>
        <div style={style.form_section}>
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
        </div>
      </div>
    )
  }
}

export default GroupForm
