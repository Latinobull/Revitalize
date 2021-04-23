import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import "./style.css";
import Wave from "../../../images/wave.jpg";
import Bird from "../../../images/bird.jpg";
import Tree from "../../../images/tree.jpg";
const mongoose = require("mongoose");

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function JournalCard() {
  const classes = useStyles();

  const journalEntries = {
    feelings: "",
    gratitude: "",
    thoughts: "",
  }

  function postEntries(){
    const [feelings, setFeelings] = useState()
    const [gratitude, setGratitide] = useState()
    const [thoughts, setThoughts] = useState()

    const handleSubmit = () =>{
      
    }

   // db.journals.create

    app.post("/addJournal", (req, res) => {
      var journalData = new Journal(req.body);
      journalData.save()
      .then(item => {
      res.send("item saved to database");
      })
      .catch(err => {
      res.status(400).send("unable to save to database");
      });
     });

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
        />
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
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
        />
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
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
        />
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Clean Slate
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}


