import React from 'react';
import Logo from './Logo'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React the hard way
          test command
          this is a random text
          generated agin
        </a>
      </header>
    </div>
  );
}

export default App;
