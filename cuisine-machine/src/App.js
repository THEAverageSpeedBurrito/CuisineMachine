import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Components
import Wrapper from './components/Wrapper'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Wrapper/>
      </MuiThemeProvider>
    );
  }
}

export default App;
