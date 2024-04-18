import React from "react";
import { Card, CardHeader, CardContent, List } from "@mui/material";
import ToDoDetail from "./ToDoDetail";

const ToDo = (props) => {
    return (
        <Card>
            <CardHeader title={ props.toDo.title } />
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
