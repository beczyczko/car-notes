import React from "react";
import './refueling.scss';

const Refueling = ({refueling}) => {
    return (
        <div className="refueling">
            <p className="amount">{refueling.amount} L</p>
            <p className="date">{refueling.date.toDateString()}</p>
            {/*todo human friendly date*/}
        </div>
    );
};

export default Refueling;
