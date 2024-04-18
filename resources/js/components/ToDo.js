import React from "react";
import { Card, TextField, CardContent, List } from "@mui/material";
import ToDoDetail from "./ToDoDetail";
import { useUpdateToDoMutateTask } from "../hooks/ToDo";

const ToDo = (props) => {
    const [timer, setTimer] = React.useState(null);

    let toDo = {
        id: props.toDo.id,
        title: props.toDo.title,
    };

    const { updateToDoMutation } = useUpdateToDoMutateTask();
    const eventUpdateToDo = (event) => {
        clearTimeout(timer);

        const newTimer = setTimeout(() => {
            let data = {
                ...toDo,
                title: event.target.value,
            };
            updateToDoMutation.mutate(data);
        }, 500);

        setTimer(newTimer);
    };

    return (
        <Card>
            <TextField
                variant="standard"
                margin="dense"
                defaultValue={ props.toDo.title }
                fullWidth
                onChange={ eventUpdateToDo }
            />
            <CardContent>
                <List>
                    {
                        props.toDo.to_do_details.map((detail) => (
                            <ToDoDetail key={ detail } detail={ detail } />
                        ))
                    }
                </List>
            </CardContent>
        </Card>
    );
};

export default ToDo;
