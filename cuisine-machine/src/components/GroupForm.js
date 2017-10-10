import React, {Component} from 'react'

// Material UI components
import TextField from 'material-ui/TextField';

var style = {
  main_form: {
    width: '100%',
    height: '100vh',
    // boxShadow: '0 0 4px 0 rgba(0, 0, 0, 0.3)',
    padding: 5,
  }
}

class GroupForm extends Component {
  render() {
    return (
      <div style={style.main_form}>
      <p>We need a little information about you to get started. We only store your data as long as your group is active. Once you reach a decision all the information is deleted.</p>
      <TextField
        hintText="Name"
        fullWidth={true}
      />
      <TextField
        hintText="Email"
        fullWidth={true}
      />
      <TextField
        hintText="Phone"
        fullWidth={true}
      />
      </div>
    )
  }
}

export default GroupForm
