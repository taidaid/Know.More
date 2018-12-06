import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
                <button>Sign Up</button>
                <button>Login</button>
              </div>
            </div>
            <div className="App-footer">Powered by Spotify API</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
