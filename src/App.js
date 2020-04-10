import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import House from './Components/House/House';
import Wizard from './Components/Wizard/Wizard';

class App extends React.Component {

  render(){
  return (
    <div className="App">
      <header className="App-header">
      <div>Dashboard

       <div>House</div>
      </div>
      <div>Header</div>
      
      <div>Wizard</div>
      </header>
    </div>
  )
  }
}

export default App;
