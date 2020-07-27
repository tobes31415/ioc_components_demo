import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Sample as SampleFoo } from "napkin_sketch"; 
import { Sample as SampleBar} from "looks_real";
import {Sample as SampleQux} from "ioc_root";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <SampleFoo/>
          <SampleBar/>
          <SampleQux/>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
