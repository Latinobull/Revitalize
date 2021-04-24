import React, { useState, useEffect } from "react";
import ProgressBar from "./Progressbar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import "./style.css";
import Grid from "@material-ui/core/Grid";
import Background from "../../assets/images/breathe.PNG";
import PlaySound from "./Sounds";


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
  return (
    <div
      classname="sessionopt"
      style={{ backgroundImage: "url(" + { Background } + ")" }}
    >
      <ProgressBar
        seconds={seconds}
        secondsValue={secondsValue}
        minsValue={minsValue}
      />
      <Grid
        className="btngrp"
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Button
          onClick={() => setSeconds(60)}
          variant="contained"
          color="default"
          className={classes.button}
          startIcon={<AccessAlarmIcon />}
        >
          1 min
        </Button>
        <Button
          onClick={() => setSeconds(300)}
          variant="contained"
          color="default"
          className={classes.button}
          startIcon={<AccessAlarmIcon />}
        >
          5 mins
        </Button>
        <Button
          onClick={() => setSeconds(600)}
          variant="contained"
          color="default"
          className={classes.button}
          startIcon={<AccessAlarmIcon />}
        >
          10 mins
        </Button>
        <Button
          onClick={() => setSeconds(1200)}
          variant="contained"
          color="default"
          className={classes.button}
          startIcon={<AccessAlarmIcon />}
        >
          20 mins
        </Button>
      </Grid>
      <PlaySound/>
    </div>
  );
}

export default Session;
