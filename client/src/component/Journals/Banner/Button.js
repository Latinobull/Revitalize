import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function handleReload() {
  window.location.reload();
}

export default function InspireButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="outlined" onClick={handleReload}>
        More Inspiration?
      </Button>
    </div>
  );
}
