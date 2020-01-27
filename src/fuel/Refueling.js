import React from "react";
import './refueling.scss';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const Refueling = ({refueling}) => {
    return (
        <div className="refueling">
            <ListItem button>
                <ListItemText primary={`${refueling.volume} L`}></ListItemText>
                {/*todo db human friendly date*/}
                <ListItemText primary={refueling.date.format("YYYY-MM-DD")}></ListItemText>
                <ListItemSecondaryAction className="actions">
                    <IconButton edge="end" aria-label="delete">
                        <DeleteIcon/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </div>
    );
};

export default Refueling;
