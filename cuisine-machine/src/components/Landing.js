import React, {Component} from 'react'

// material UI components
import AppBar from 'material-ui/AppBar';

var style = {
  full: {
    width: '100%',
    height: '100%',
  }
}

class Landing extends Component {
  constructor(props){
    super(props)
    this.state = {
      style: style,
      saySomething: function () {
        console.log('something');
      }
    }
  }
  render(){
    return (
      <div style={style.full}>
        <AppBar
          title="Cuisine Machine"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.state.saySomething}
        />
        <div className="wrapper">
          <div className="landing-header"></div>
        </div>
      </div>
    )
  }
}


export default Landing
