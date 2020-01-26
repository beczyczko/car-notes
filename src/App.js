import React from 'react';
import './App.css';
import Refuelings from "./fuel/Refuelings";
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

function App() {
    return (

        <MuiPickersUtilsProvider utils={MomentUtils}>
            <div className="App">
                <header className="App-header">
                    Car Notes
                    {/*    todo header jako osobny component z nawigacją*/}
                </header>
                <Refuelings/>
            </div>
        </MuiPickersUtilsProvider>
    );
}

export default App;
