import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/grid';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function Post() {
    const classes = useStyles();
    const [data] = useState([{
        topic: "Topic 1",
        details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        id: 1
    }, {
        topic: "Topic 2",
        details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        id: 2
    }, {
        topic: "Topic 3",
        details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        id: 3
    }])

    return (
        <div>
            <Grid 
            container
             spacing={0}
             direction="column"
             alignItems="center"
             justify="center"
             >
                 {data.map(i => {
                     return(
                        <Grid
                        item
                        key={i.id} 
                        onClick={function(){alert("test")}}
                        >
                            <Paper className={classes.paper}>{i.topic}</Paper>
                        </Grid>
                     )
                 })}
             </Grid>
        </div>
    )
}
