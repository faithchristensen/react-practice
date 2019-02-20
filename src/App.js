import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CoolButton from './components/CoolButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CoolButton
          backgroundColor='green'
          color='white'
          onClick={ () => {console.log('hi')} }
        >
          hello
        </CoolButton>
        <CoolButton 
          backgroundColor='blue' 
          color='grey'
          onClick={ () => {console.log('hello')} }
        >
          Hi
        </CoolButton>
        <CoolButton 
          backgroundColor='purple' 
          color='white'
          onClick={ () => {console.log('what is up')} }
        >
          Hiya
        </CoolButton>
        <CoolButton 
          backgroundColor='yellow' 
          color='grey'
          onClick={ () => {console.log('hey')} }
        >
          Hey
        </CoolButton>
      </div>
    );
  }
}

export default App;