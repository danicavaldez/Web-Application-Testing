import React, { useState } from 'react';
import Display from './components/Display.js'
import Dashboard from './components/Dashboard'

import './App.css';

function App() {
  const [ball, setBall] = useState(0);
  const [strike, setStrike] = useState(0);
  const [hit, setHit] = useState(0);
  const [foul, setFoul] = useState(0);

  return (
    <div>
      <h1>Baseball App</h1>
      <Display ball={ball} setBall={setBall} strike={strike} setStrike={setStrike} foul={foul} setFoul={setFoul} hit={hit} setHit={setHit} />
      <Dashboard ball={ball} strike={strike} />
    </div>
  );
}

export default App;
