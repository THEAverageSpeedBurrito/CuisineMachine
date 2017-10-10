import React, {Component} from 'react'

// Material UI components
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
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

  state = {
    finished: false,
    stepIndex: 0
  }

  handleNext = () => {
    var {stepIndex} = this.state

    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex <= 2
    })
  }
  handlePrev = () => {
    var {stepIndex} = this.state
    if(stepIndex > 0){
      this.setState({
        stepIndex: stepIndex - 1
      })
    }
  }

  renderStepActions(step) {
    const {stepIndex} = this.state;

    return (
      <div style={{margin: '12px 0'}}>
        <RaisedButton
          label={stepIndex === 2 ? 'Finish' : 'Next'}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onClick={this.handleNext}
          style={{marginRight: 12}}
        />
        {step > 0 && (
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onClick={this.handlePrev}
          />
        )}
      </div>
    );
  }

  render() {
    const {finished, stepIndex} = this.state;
    console.log(finished, stepIndex);

    return (
      <div style={style.main_form}>
        <Stepper activeStep={stepIndex} orientation="vertical">
          <Step>
            <StepLabel>Create a new group</StepLabel>
            <StepContent>
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
              </div>
              {this.renderStepActions(0)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Select cuisine options</StepLabel>
            <StepContent>
              <p>An ad group contains one or more ads which target a shared set of keywords.</p>
              {this.renderStepActions(1)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Invite people to join in</StepLabel>
            <StepContent>
              <p>
                Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.
              </p>
              {this.renderStepActions(2)}
            </StepContent>
          </Step>
        </Stepper>

      </div>
    )
  }
}

export default GroupForm
