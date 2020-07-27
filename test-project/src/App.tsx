import React, { useState, useCallback } from 'react';
import logo from './logo.svg';
import './App.css';
import {Box, createNewIocContext, IoCRoot, Button} from "ioc_root"; 
import {registerWithIoc as registerWithIoc_lr} from "looks_real";
import {registerWithIoc as registerWithIoc_ns} from "napkin_sketch";

const ctx_lr = createNewIocContext();
registerWithIoc_lr(ctx_lr);   

const ctx_ns = createNewIocContext();
registerWithIoc_ns(ctx_ns);

function App() {
  const [ctx, setCtx] = useState(ctx_lr);
  const toggleCtx = useCallback(() => {
    setCtx(ctx === ctx_lr ? ctx_ns : ctx_lr)
  }, [ctx]);

  return (
    <IoCRoot IoCContext={ctx}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Box>
          <Button onClick={toggleCtx}>
            Hello World
          </Button>
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
