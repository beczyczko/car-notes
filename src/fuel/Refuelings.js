import React, {useState, useEffect} from "react";
import Refueling from "./Refueling";
import './refuelings.scss';
import AddRefueling from "./add-refueling/AddRefueling";
import moment from "moment";
import List from "@material-ui/core/List";

const Refuelings = () => {
    const [refuelings, setRefuelings] = useState([]);

    //todo db wynieść ten środek do jakiegoś refuelings providera?
    useEffect(() => {
        const refuelings = JSON.parse(localStorage.getItem('refuelings'));
        if (refuelings) {
            refuelings.forEach(r => r.date = moment(r.date));
            setRefuelings(refuelings);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('refuelings', JSON.stringify(refuelings));
    }, [refuelings]);

    const handleRefuelingAdded = (volume, date) => {
        //todo db wynieść zapis gdzieś do AddRefueling componentu
        // a tutaj tylko zebrać info, żeby dodać do listy, którą wyświetlamy
        const highestId = Math.max(...refuelings.map(r => r.id), 0);
        setRefuelings(prevRefuelings => [...prevRefuelings, {
            id: highestId + 1,
            volume: volume,
            date: date,
        }]);
    };

    const handleRefuelingRemoved = (id) => {
        const prevRefuelings = [...refuelings];
        const index = prevRefuelings.findIndex(r => r.id === id);
        prevRefuelings.splice(index, 1);
        setRefuelings(prevRefuelings);
    };

    return (
        <div>
            <AddRefueling onRefuelingAdded={handleRefuelingAdded}></AddRefueling>
            <List>
                {refuelings.map(r => (
                    <Refueling key={r.id} refueling={r}
                               onRefuelingRemoved={handleRefuelingRemoved}></Refueling>
                ))}
            </List>
        </div>
    );
};

export default Refuelings;
