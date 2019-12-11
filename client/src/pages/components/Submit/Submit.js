import React /*useState useEffect*/ from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { useInputChange } from "../../../hooks/useInputChange";
import api from "../../../util/postAPI";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
      // width: 200,
    }
  }
}));

export default function Submit() {
  const classes = useStyles();
  const [input, handleInputChange] = useInputChange();

  const handleSubmit = e => {
    e.preventDefault();
    api.post(input)
    .then(data => data.status === 200 ? console.log("Successful post!") : console.log("Placeholder Expression!"))
    .catch(err => console.log(err));
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="topic" label="Topic" onChange={handleInputChange} />
      <TextField
        id="detail"
        label="Details"
        multiline
        rows="4"
        className={classes.textField}
        margin="normal"
        variant="outlined"
        onChange={handleInputChange}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </form>
  );
}
