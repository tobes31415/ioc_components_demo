import React, { useState, useCallback } from 'react';
import './App.css';
import {Box, createNewIocContext, IoCRoot, Button, TextInput} from "ioc_root"; 
import {registerWithIoc as registerWithIoc_lr} from "looks_real";
import {registerWithIoc as registerWithIoc_ns} from "napkin_sketch";

const ctx_lr = createNewIocContext();
registerWithIoc_lr(ctx_lr);   

const ctx_ns = createNewIocContext();
registerWithIoc_ns(ctx_ns);

function App() {
  const [ctx, setCtx] = useState(ctx_ns);
  const toggleCtx = useCallback(() => {
    setCtx(ctx === ctx_lr ? ctx_ns : ctx_lr)
  }, [ctx]);

  const [name, setName] = useState("World");

  return (
    <IoCRoot IoCContext={ctx}> 
    <div className="App">
        <Box>
          <Button onClick={toggleCtx}>
            Hello {name}
          </Button>
          <TextInput value={name} onChange={setName}/>
        </Box>
    </div>
    <div>Click the "Hello" button to toggle between napkin sketch and fancy components</div>
    </IoCRoot>
  );
}

export default App;
