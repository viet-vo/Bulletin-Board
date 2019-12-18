import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/grid';
import Button from '@material-ui/core/Button';

import api from '../../../util/API';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(1.5),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function Post() {
    const test = () => {
        api.read()
        .then(data => console.log(data))
        .catch(err => console.log(err));
    };
    const classes = useStyles();
    const [data] = useState([{
        topic: "Jeff Bezos says employee activists are wrong and Silicon Valley firms should feel comfortable doing business with the US military",
        details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        id: 1
    }, {
        topic: "DAE feel like the web and other technologies are just so complicated and overwhelming these days?",
        details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        id: 2
    }, {
        topic: "The Prize Is Not Given; You Have To Win It: How I Became a Self-Taught Developer",
        details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        id: 3
    },{
        topic: "Jeff Bezos says employee activists are wrong and Silicon Valley firms should feel comfortable doing business with the US military",
        details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        id: 4
    }, {
        topic: "DAE feel like the web and other technologies are just so complicated and overwhelming these days?",
        details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        id: 5
    }, {
        topic: "The Prize Is Not Given; You Have To Win It: How I Became a Self-Taught Developer",
        details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        id: 6
    },{
        topic: "Jeff Bezos says employee activists are wrong and Silicon Valley firms should feel comfortable doing business with the US military",
        details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        id: 7
    }, {
        topic: "DAE feel like the web and other technologies are just so complicated and overwhelming these days?",
        details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        id: 8
    }, {
        topic: "The Prize Is Not Given; You Have To Win It: How I Became a Self-Taught Developer",
        details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        id: 9
    }])
    
    return (
        <div>
            <Grid 
            container
             spacing={3}
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
             <Button lable="test" onClick={test}>test</Button>
        </div>
    )
}
