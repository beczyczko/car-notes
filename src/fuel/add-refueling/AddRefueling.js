import React, {useState} from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

import { DateTimePicker } from "@material-ui/pickers";
import moment from "moment";

const AddRefueling = ({onRefuelingAdded}) => {
    const [open, setOpen] = React.useState(false);

    const [amount, setAmount] = useState('');
    const [date, setDate] = useState(moment());

    const updateAmount = e => {
        setAmount(e.target.value);
    };

    const onSave = () => {
        //todo db prawdziwy zapis
        onRefuelingAdded(amount, date);
        onClose();
    };

    const openDialog = () => {
        setAmount('');
        setDate(moment());
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={openDialog}>
                Add refueling
            </Button>
            <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add refueling</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Fuel amount [L]" //todo db dodać taką 'L' na koniec pola wyszarzoną
                        type="number"
                        fullWidth
                        value={amount}
                        onChange={updateAmount}
                    />
                    <DateTimePicker
                        variant="inline"
                        label="Refuelment date"
                        value={date}
                        onChange={setDate}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={onSave} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default AddRefueling;
