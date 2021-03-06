import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function SubmitButton(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button onClick={()=>props.handleSubmit()} id="submitB" variant="contained" color="primary">
        Submit Journal Entry
      </Button>
    </div>
  );
}


