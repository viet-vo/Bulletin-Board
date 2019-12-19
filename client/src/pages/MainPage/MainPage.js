import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Post from "../components/Post";
import Submit from "../components/Submit";
import { PostDataProvider } from "../../provider/PostDataContext";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function MainPage() {
  const classes = useStyles();

  return (
    <PostDataProvider>
      <div className={classes.root}>
        <Grid
          container
          spacing={0}
          direction="row"
          alignItems="center"
          justify="center"
          style={{
            minHeight: "100vh",
            maxWidth: "99vw"
          }}
        >
          <Grid item md={3} xs={3}>
            <Paper className={classes.paper}>
              <Submit />
            </Paper>
          </Grid>
          <Grid item md={9} xs={12}>
            <Post/>
          </Grid>
        </Grid>
      </div>
    </PostDataProvider>
  );
}
