import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper, Grid, Button } from "@material-ui/core";

import api from "../../../util/API";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(1.5),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function Post() {
  const [data, setData] = useState();
  useEffect(() => {
    api
      .read()
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  const classes = useStyles();

  return (
    <div>
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
    </div>
  );
}
