import React from 'react';
import './App.css';
import Refuelings from "./fuel/Refuelings";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                Car Notes
                {/*    todo header jako osobny component z nawigacją*/}
            </header>
            <Refuelings/>
        </div>
    );
}

export default App;
