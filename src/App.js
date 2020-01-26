import React from 'react';
import './App.css';
import Refueling from "./fuel/Refueling";

function App() {
  return (
    <div className="App">
      <header className="App-header">
Car Notes
      </header>
        <Refueling refueling={{amount: 32, date: '12-06-2019'}}></Refueling>
        <Refueling refueling={{amount: 32, date: '12-06-2019'}}></Refueling>
        <Refueling refueling={{amount: 32, date: '12-06-2019'}}></Refueling>
        <Refueling refueling={{amount: 32, date: '12-06-2019'}}></Refueling>
    </div>
  );
}

export default App;
