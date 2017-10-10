import React, {Component} from 'react'

// material UI components
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import {browserHistory} from 'react-router'

var style = {
  hungry_people: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    maxWidth: 400,
  },
  appBar: {
    background: '#9756A2'
  },
  get_started: {
    background: '#9756A2',
    width: 200,
  }
}

class Landing extends Component {
  constructor(props){
    super(props)
    this.state = {
      style: style,
      getStarted: function () {
        browserHistory.push('/newgroup')
      }
    }
  }
  render(){
    return (
      <div className="full">
        <AppBar
          style={style.appBar}
          title="Cuisine Machine"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <img src="/assets/hungry_people.svg" alt="people" style={style.hungry_people}/>
        <div className="wrapper">
          <p>It's not always easy for a group of friends to decide where to eat.</p>
          <p><strong>CuisineMachine</strong> can make a decision based on the input of the group so everyone can be satisfied and happy!</p>
          <center style={{marginTop: 20}}>
            <RaisedButton label="Get Started"
              overlayStyle={style.get_started}
              labelColor="white"
              onClick={this.state.getStarted}
            />
          </center>
        </div>
      </div>
    )
  }
}


export default Landing
