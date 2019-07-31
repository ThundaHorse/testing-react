import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <span className="image-counter" onClick={this.props.onClick}>
            <img src={logo} className="App-logo" alt="logo" />
          </span>
          <div>
            The image has been clicked {this.props.clicks} times.
          </div>
        </header>
      </div>
    );
  }
}

export default App;
