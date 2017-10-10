import React, {Component} from 'react'

// Material UI components
import AppBar from 'material-ui/AppBar'

// React components
import GroupForm from './GroupForm'

var style = {
  appBar: {
    background: '#9756A2'
  },
}

class NewGroup extends Component {
  render() {
   return (
     <div className="full">
       <AppBar
       style={style.appBar}
         title="Cuisine Machine"
         iconClassNameRight="muidocs-icon-navigation-expand-more"
       />
       <div className='wrapper'>
        <GroupForm/>
       </div>
     </div>
   )
  }
}

export default NewGroup
