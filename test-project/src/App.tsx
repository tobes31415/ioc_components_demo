import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Box, createNewIocContext, IoCRoot} from "ioc_root"; 
import {registerWithIoc} from "looks_real";

const ctx = createNewIocContext();
registerWithIoc(ctx);

function App() {
  return (
    <IoCRoot IoCContext={ctx}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Box>
          Hello World
        </Box>
        <p>
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
    </IoCRoot>
  );
}

export default App;
