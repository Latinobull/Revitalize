import React, {useState} from "react";
import ProgressBar from "./Progressbar";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import { PromiseProvider } from "mongoose";



// const [time, setTime] = useState("");

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

function Session(){
    const classes = useStyles();
    return(
        <div>
<ProgressBar />
<Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<AccessAlarmIcon />}
      >
        1 min
      </Button>
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<AccessAlarmIcon />}
      >
        5 mins
      </Button>
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<AccessAlarmIcon />}
      >
        10 mins
      </Button>
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<AccessAlarmIcon />}
      >
        20 mins
      </Button>
        </div>
    )
}

export default Session;