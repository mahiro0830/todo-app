import React from "react";
import ReactDOM from "react-dom";
import Grid from "@mui/material/Grid";
import ToDo from "../components/ToDo";
import { useCurrentToDoList, useGetToDoList } from "../hooks/ToDoList";

const Home = () => {
    const { isLoading } = useGetToDoList();
    const toDoList = useCurrentToDoList();
    if (isLoading) return "Now Loading...";

    return (
        <Grid container spacing={2}>
            {
                toDoList.map((toDo) => (
                    <Grid item key={toDo.id} xs={3}>
                        <ToDo toDo={toDo} />
                    </Grid>
                ))
            }
        </Grid>
    );
}

export default Home;
