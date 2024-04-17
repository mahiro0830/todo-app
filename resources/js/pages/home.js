import React from "react";
import ReactDOM from "react-dom";
import Grid from '@mui/material/Grid';
import ToDo from "../components/ToDo";

function Home() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <ToDo />
            </Grid>
        </Grid>
    );
}

export default Home;
