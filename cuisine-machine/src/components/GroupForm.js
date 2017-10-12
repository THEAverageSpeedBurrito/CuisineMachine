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
import Slider from 'material-ui/Slider';

// React components
import DisplayMap from './DisplayMap'

var style = {
  main_form: {
    width: '100%',
    height: '100vh',
    padding: 5,
  },
  form_section: {
    margin: '0 0 0 0',
  },
  input: {
    margin: 5,
  },
  section_header: {
    fontSize: 14,
    paddingBottom: 5,
    margin: '0 0 0 0',
    textTransform: 'capitalize',
    textAlign: 'right'
  },
  subtext: {
    color: 'gray',
    fontSize: '10px',
    textAlign: 'left',
    margin: '0',
    padding: '0 0 5px 0',
    borderBottom: '1px solid lightgray',
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
    stepIndex: 1,
    loc: {
      lat: 51,
      lng: -144
    },
    radius: 1,
  }

  // handle next stepper
  handleNext = () => {
    var {stepIndex} = this.state
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex <= 2,
      loc: this.state.loc
    })
  }
  // handle previous stepper
  handlePrev = () => {
    var {stepIndex} = this.state
    if(stepIndex > 0){
      this.setState({
        stepIndex: stepIndex - 1
      })
    }
  }
  // get geo location
  getLoc = () => {
    var coords = undefined

    var promise = new Promise((resolve, reject) => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(pos) {
          coords = pos.coords
          resolve(coords)
        })
      } else {
        reject('geolocation not available')
      }
    })

    let master = this
    promise.then((message) => {
      master.setState({
        loc: {
          lat: coords.latitude,
          lng: coords.longitude
        }
      })
    })
  }

  changeRadius = (event, value) => {
    this.setState({
      radius: value
    })
  }

  renderStepActions(step) {
    const {stepIndex} = this.state;

    return (
      <div style={{margin: '12px 0', padding: '10px 0 0 0', borderTop: '1px solid lightgray'}}>
        <RaisedButton
          label={stepIndex === 2 ? 'Finish' : 'Next'}
          primary={true}
          onClick={this.handleNext}
          style={{marginRight: 12}}
        />
        {step > 0 && (
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            onClick={this.handlePrev}
          />
        )}
      </div>
    );
  }

  render() {
    const {finished, stepIndex} = this.state;

    return (
      <div style={style.main_form}>
        <Stepper activeStep={stepIndex} orientation="vertical">
          <Step>
            <StepLabel>Create a new group</StepLabel>
            <StepContent>
              <div style={style.form_section}>
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
            <StepLabel>Set location</StepLabel>
            <StepContent>
              <p style={style.subtext}>Click use my location or input a zip code.</p>
              <div className="row">
                <RaisedButton
                  label="Use My Location"
                  primary={true}
                  onClick={this.getLoc}
                  style={{width: '100%'}}
                />
                <DisplayMap lat={this.state.loc.lat} lng={this.state.loc.lng} />
                <p>Search Radius: {this.state.radius}mi.</p>
                <Slider
                  min={1}
                  max={50}
                  defaultValue={5}
                  style={{margin: '0 10px 0 10px'}}
                  onChange={this.changeRadius}
                  step={1}
                />
              </div>
              {this.renderStepActions(1)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Add options</StepLabel>
            <StepContent>

              {this.renderStepActions(2)}
            </StepContent>
          </Step>
        </Stepper>

      </div>
    )
  }
}

export default GroupForm
