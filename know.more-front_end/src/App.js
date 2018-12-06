import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import Card from './components/Card/Card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='Background'>
          <div className="App-header">
            <h1>Know.More</h1>
            <div className='Welcome'>
              <h2>Know more about your music</h2>
              <div className='Welcome-buttons'>
                <button className='waves-effect waves-light btn'>Sign Up</button>
                <button className='waves-effect waves-light btn'>Login</button>
              </div>
            </div>
            <div className="App-footer">Powered by Spotify API</div>
          </div>
        </div>
        <div className='Welcome-info'>
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}

export default App;
