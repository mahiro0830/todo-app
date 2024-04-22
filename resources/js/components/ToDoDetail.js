import { React, useState } from "react";
import {
    ListItem,
    ListItemButton,
    ListItemIcon,
    IconButton,
    Checkbox,
    TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useUpdateToDoDetailMutateTask } from "../hooks/ToDoDetail";

const ToDoDetail = (props) => {
    const [timer, setTimer] = useState(null);

    let toDoDetail = {
        id: props.detail.id,
        name: props.detail.name,
        completed_flag: props.detail.completed_flag == 1 ? true : false,
    };

    const { updateToDoDetailMutation } = useUpdateToDoDetailMutateTask();
    const eventUpdateToDoDetail = (event) => {
        clearTimeout(timer);

        const newTimer = setTimeout(() => {
            let data = {
                ...toDoDetail,
                name: event.target.value,
            };
            updateToDoDetailMutation.mutate(data);
        }, 500);

        setTimer(newTimer);
    };

    const eventCheckToDoDetail = (event) => {
        let data = {
            ...toDoDetail,
            completed_flag: event.target.checked,
        };
        updateToDoDetailMutation.mutate(data);
    };

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
                    <Checkbox
                    edge="start"
                    defaultChecked={ props.detail.completed_flag == 1 }
                    onChange={ eventCheckToDoDetail }
                    />
                </ListItemIcon>
                <TextField
                    variant="standard"
                    margin="dense"
                    defaultValue={ props.detail.name }
                    fullWidth
                    onChange={ eventUpdateToDoDetail }
                />
            </ListItemButton>
        </ListItem>
    );
};

export default ToDoDetail;
