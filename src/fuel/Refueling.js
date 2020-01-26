import React from "react";
import './refueling.scss';

const Refueling = ({refueling}) => {
    return (
        <div className="refueling">
            <p>{refueling.volume} L</p>
            <p>{refueling.date.format("YYYY-MM-DD")}</p>
            {/*todo human friendly date*/}
        </div>
    );
};

export default Refueling;
