// src/App.js

import React from 'react';
import './App.css';
import Carsfunc from './Carsfunc';
import TrafficSignalfunc from './TrafficSignalfunc';

function App() {
  return (
    <div className="container">
      <Carsfunc />
      <TrafficSignalfunc />
    </div>
  );
}

export default App;
