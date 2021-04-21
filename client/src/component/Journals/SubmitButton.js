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

export default function SubmitButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary">
        Submit Journal Entry
      </Button>
    </div>
  );
}


// const express = require('express');
// const router = express.Router();
// const mongodb = require('mongodb').MongoClient;

// router.post('/insert', function(req, res) {
//   let journalEntry = {
//     feelings: req.body.feelings,
//     gratitude: req.body.gratitude,
//     thoughts: req.body.thoughts
//   };

//   function handleSubmit(){

//   }