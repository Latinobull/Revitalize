import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import "./style.css";
import Wave from "../../../assets/images/wave.jpg";
import Bird from "../../../assets/images/bird.jpg";
import Tree from "../../../assets/images/tree.jpg";
import SubmitButton from "../SubmitButton";
import axios from "axios";
const mongoose = require("mongoose");
const db = mongoose.connection;

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function JournalCard() {
  const classes = useStyles();

  const [feelings, setFeelings] = useState();
  const [gratitude, setGratitude] = useState();
  const [thoughts, setThoughts] = useState();

  const handleSubmit = () => {
    var date = Date();

    const journalEntries = {
      feelings,
      gratitude,
      thoughts,
      date,
    };
    console.log(journalEntries);

    axios.post("api/journals", {
      feelings,
      gratitude,
      thoughts,
      date,
    });

    setFeelings("")
    setGratitude("")
    setThoughts("")
  };

  const clearFunction = () => {
    setFeelings("")
    setGratitude("")
    setThoughts("")
  }

  return (
    <div>
      <div id="cardOne">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              component="img"
              image={Wave}
              title="Waves"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Feelings
              </Typography>
              <TextField
                id="feelings"
                label="How are you feeling?"
                multiline
                rowsMax={12}
                value={feelings}
                onChange={(e) => setFeelings(e.target.value)}
              />
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={clearFunction}>
              Clean Slate
            </Button>
          </CardActions>
        </Card>
      </div>
      <div id="cardTwo">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              component="img"
              image={Bird}
              title="Humming Bird"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Gratitude
              </Typography>
              <TextField
                id="gratitude"
                label="What are you grateful for?"
                multiline
                rowsMax={12}
                value={gratitude}
                onChange={(e) => setGratitude(e.target.value)}
              />
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={clearFunction}>
              Clean Slate
            </Button>
          </CardActions>
        </Card>
      </div>

      <div id="cardThree">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              component="img"
              image={Tree}
              title="Tree"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Thoughts
              </Typography>
              <TextField
                id="thoughts"
                label="What's on your mind?"
                multiline
                rowsMax={12}
                value={thoughts}
                onChange={(e) => setThoughts(e.target.value)}
              />
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={clearFunction}>
              Clean Slate
            </Button>
          </CardActions>
        </Card>
        <SubmitButton handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default JournalCard;
