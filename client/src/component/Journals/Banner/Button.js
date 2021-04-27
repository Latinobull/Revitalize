import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const [i, setI] = useState(0);


function handleIterate() {
  setI(i + 1)
}

export default function InspireButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="outlined" onClick={handleIterate} count={i}>
        More Inspiration?
      </Button>
    </div>
  );
}
