import React, {useState} from "react";
import './refueling.scss';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";

const Refueling = ({refueling, onRefuelingRemoved}) => {
    const [open, setOpen] = useState(false);

    const onClose = () => {
        setOpen(false);
    };

    const onConfirm = () => {
        onRefuelingRemoved(refueling.id);
        onClose();
    };

    return (
        <div className="refueling">
            <ListItem button>
                <ListItemText primary={`${refueling.volume} L`}></ListItemText>
                {/*todo db human friendly date*/}
                <ListItemText primary={refueling.date.format("YYYY-MM-DD")}></ListItemText>
                <ListItemSecondaryAction className="actions">
                    <IconButton edge="end"
                                aria-label="delete"
                                onClick={() => setOpen(true)}>
                        <DeleteIcon/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            <Dialog open={open} onClose={onClose} aria-labelledby="remove-refueling-dialog-title">
                <DialogTitle id="form-dialog-title">Remove refueling</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure that you want to remove the refueling?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={onConfirm} color="primary">
                        Remove
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Refueling;
