import React, { /*useState, useEffect*/ } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// import usePost from '../../../hooks/usePost';
// 
const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      // width: 200,
    },
  },
}));

export default function Submit() {
  const classes = useStyles();
  // const [post, setPost] = useState(0);

  // useEffect(() => {
  //   useF
  //   return () => {
  //     cleanup
  //   };
  // }, [input])

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Topic" />
      <TextField
          id="outlined-multiline-static"
          label="Details"
          multiline
          rows="4"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
      <Button variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
}