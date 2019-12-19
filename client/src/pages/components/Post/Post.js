import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper, Grid, Button } from "@material-ui/core";

import usePostCall from '../../../hooks/usePostCall';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(1.5),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));
const Post = () => {
  const classes = useStyles();
  const data = usePostCall();
  return (
    <>
      <Grid
        container
        spacing={3}
        direction="column"
        alignItems="center"
        justify="center"
        wrap="nowrap"
      >
        {data ? (
          data.map(i => {
            return (
              <Grid
                item
                zeroMinWidth
                key={i._id}
                onClick={function() {
                  console.log(i.detail);
                }}
              >
                <Paper className={classes.paper}>
                  <Typography noWrap>{i.topic}</Typography>
                </Paper>
              </Grid>
            );
          })
        ) : (
          <Grid item>
            <Paper className={classes.paper}>
              <Typography>Loading...?</Typography>
            </Paper>
          </Grid>
        )}
        <Button lable="test">test</Button>
      </Grid>
    </>
  );
}

export default Post;