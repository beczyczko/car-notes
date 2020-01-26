import React, {useState, useEffect} from "react";
import Refueling from "./Refueling";
import './refuelings.scss';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Refuelings = () => {
    const dateTimeFormat = 'MMMM d, yyyy h:mm aa';

    const [amount, setAmount] = useState('');
    const [date, setDate] = useState(new Date());

    const [refuelings, setRefuelings] = useState([]);

    //todo db wynieść ten środek do jakiegoś refuelings providera?
    useEffect(() => {
        const refuelings = JSON.parse(localStorage.getItem('refuelings'));
        if (refuelings) {
            refuelings.forEach(r => r.date = new Date(r.date));
            setRefuelings(refuelings);
        }
    }, []);

    const updateAmount = event => {
        const value = event.target.value;
        setAmount(value);
    };

    const addRefueling = e => {
        e.preventDefault();
        const highestId = Math.max(...refuelings.map(r => r.id), 0);
        setRefuelings(prevRefuelings => [...prevRefuelings, {
            id: highestId + 1,
            amount: amount,
            date: date,
        }]);
    }

    //todo db wynieść zapis gdzieś
    useEffect(() => {
        localStorage.setItem('refuelings', JSON.stringify(refuelings));
    }, [refuelings]);

    return (
        <div>
            <div className="add-refueling">
                <form onSubmit={addRefueling}>
                    <input type="number" value={amount} onChange={updateAmount}></input>
                    <DatePicker
                        selected={date}
                        onChange={date => setDate(date)}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        timeCaption="time"
                        dateFormat={dateTimeFormat}
                    />
                    <input type="submit" value="Send"></input>
                </form>
            </div>

            {refuelings.map(r => (
                <Refueling key={r.id} refueling={r}></Refueling>
            ))}
        </div>
    );
};

export default Refuelings;
