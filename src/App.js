import React from 'react';
import './App.css';
import Refueling from "./fuel/Refueling";

function App() {
    const refuelings = [
        {amount: 32, date: '12-06-2019'},
        {amount: 32, date: '12-06-2019'},
        {amount: 32, date: '12-06-2019'},
        {amount: 32, date: '12-06-2019'},
    ];

    return (
        <div className="App">
            <header className="App-header">
                Car Notes
            {/*    todo header jako osobny component z nawigacją*/}
            </header>
            {refuelings.map(r => (
                <Refueling refueling={r}></Refueling>
            ))}
        </div>
    );
}

export default App;
