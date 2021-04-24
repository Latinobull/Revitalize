import React, { useState, useEffect } from "react";
import ProgressBar from "./Progressbar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import "./style.css";
import Grid from "@material-ui/core/Grid";
import PlaySound from "./Sounds";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container'


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function Session() {
  const [seconds, setSeconds] = useState(0);
  const classes = useStyles();

  const [secondsValue, setSecondsValue] = useState(0);
  const [minsValue, setMinsValue] = useState(0);
  // const [seconds, setSeconds] = useState(props.seconds)

  const [maxSeconds, setMaxSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds === 0) return;
      if (seconds > 0) {
        // when it gets to 0, it doesn't go to 0 it stays at 1 sec remaining
        setSeconds((seconds) => seconds - 1);
        setSecondsValue(seconds % 60);
        setMinsValue(Math.floor(seconds / 60));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);
  console.log(seconds);
const handleClick= (time) =>{
  setSeconds(time)
  setMaxSeconds(time)
}

  return (
    <div
      classname="sessionopt"
    >
      <Jumbotron fluid
      className="custom-jumbotron">
  <Container
  justify="center">
    <h1>Breathing Session</h1>
    <p>
    To live mindfully, the breath is the key. Breathe in, breathe out release the stress and let it all out. Choose the length of time below, for your session, and select a sound to set the mood. Remember, reamin in the present, and focus on your breathing! 
    </p>
  </Container>
</Jumbotron>
      <ProgressBar className="progressBar"
        seconds={seconds}
        secondsValue={secondsValue}
        minsValue={minsValue}
        maxValue={maxSeconds}
      />
      <Grid
        className="btngrp"
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Button
          onClick={() => handleClick(60)}
          variant="contained"
          color="default"
          className={classes.button}
          startIcon={<AccessAlarmIcon />}
        >
          1 min
        </Button>
        <Button
          onClick={() => handleClick(300)}
          variant="contained"
          color="default"
          className={classes.button}
          startIcon={<AccessAlarmIcon />}
        >
          5 mins
        </Button>
        <Button
          onClick={() => handleClick(600)}
          variant="contained"
          color="default"
          className={classes.button}
          startIcon={<AccessAlarmIcon />}
        >
          10 mins
        </Button>
        <Button
          onClick={() => handleClick(1200)}
          variant="contained"
          color="default"
          className={classes.button}
          startIcon={<AccessAlarmIcon />}
        >
          20 mins
        </Button>
      </Grid>

      <Grid 
      container
      direction="column"
      justify="space-evenly"
      alignItems="flex-end"
      className="playsound">
      <PlaySound/>
      </Grid>
    </div>
  );
}

export default Session;
