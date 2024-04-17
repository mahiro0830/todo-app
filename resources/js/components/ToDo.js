import React from "react";
import { Card, CardHeader, CardContent, List } from "@mui/material";
import ToDoDetail from "./ToDoDetail";

const ToDo = () => {
    return (
        <Card>
            <CardHeader title="test todo" />
            <CardContent>
                <List>
                    {[0, 1, 2, 3].map((value) => {
                        return <ToDoDetail id={value} />;
                    })}
                </List>
            </CardContent>
        </Card>
    );
};

export default ToDo;
