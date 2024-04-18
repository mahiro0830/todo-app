import React from "react";
import {
    ListItem,
    ListItemButton,
    ListItemText,
    ListItemIcon,
    IconButton,
    Checkbox
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ToDoDetail = (props) => {
    return (
        <ListItem
            key={ props.id }
            secondaryAction={
                <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton>
                <ListItemIcon>
                    <Checkbox edge="start" />
                </ListItemIcon>
                <ListItemText primary={ props.detail.name } />
            </ListItemButton>
        </ListItem>
    );
};

export default ToDoDetail;
