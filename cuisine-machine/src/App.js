import React, { Component } from 'react';
import './App.css';
import {Router, Route, browserHistory} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Components
import Landing from './components/Landing'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <Router history={browserHistory}>
        <Route path="/" component={Landing} />
      </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
