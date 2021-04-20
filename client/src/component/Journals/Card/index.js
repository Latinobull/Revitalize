import React from "react";
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

  return (
    <div>
      <div id="cardOne">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              component="img"
              image="../../../../public/images/wave.jpg"
              title="Waves"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Feelings
              </Typography>
              <TextField
          id="standard-multiline-flexible"
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
              image="../../../../public/images/bird.jpg"
              title="Humming Bird"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Gratitude
              </Typography>
              <TextField
          id="standard-multiline-flexible"
          label="What are you grateful for?"
          multiline
          rowsMax={4}
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
              image="../../../../public/images/tree.jpg"
              title="Tree"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Thoughts
              </Typography>
              <TextField
          id="standard-multiline-flexible"
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
