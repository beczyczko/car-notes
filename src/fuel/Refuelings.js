import React from "react";
import Refueling from "./Refueling";

const Refuelings = () => {
    const refuelings = [
        {amount: 32, date: '12-06-2019'},
        {amount: 32, date: '12-06-2019'},
        {amount: 32, date: '12-06-2019'},
        {amount: 32, date: '12-06-2019'},
    ];

    return (
        <div>
            {refuelings.map(r => (
                <Refueling refueling={r}></Refueling>
            ))}
        </div>
    );
};

export default Refuelings;
