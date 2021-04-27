import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useAuth } from '../Authenticate/AuthContext';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Link,
  makeStyles,
  Typography,
} from '@material-ui/core';
import Physical from '../assets/images/Main-Page-Photos/Physical.jpg';
import Mental from '../assets/images/Main-Page-Photos/Mental.jpg';
import Chat from '../assets/images/Main-Page-Photos/Chat.png';
import Background from '../assets/images/recipes.PNG';

const useStyles = makeStyles({
  root: {
    marginLeft: 20,
    marginRight: 20,
  },
  header: {
    paddingBottom: '60px',
  },
  button: {
    background: 'linear-gradient(45deg, #FAE5DF 30%, #ed7966 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: '#141850',
    height: 48,
    padding: '0 30px',
    justifyContent: 'center',
  },
});
export default function Main_Page() {
  const [error, setError] = useState('');
  const { Logout, currentUser } = useAuth();
  const history = useHistory();

  async function handleLogut() {
    setError('');

    try {
      await Logout();
      history.push('/login');
    } catch {
      setError('Something went wrong');
    }
  }
  var userDisplay = JSON.stringify(currentUser.displayName);

  const classes = useStyles();
  return (
    <div>
      <div
        className="bg"
        style={{ backgroundImage: `url(${Background})` }}
      ></div>
      <Grid container>
        <Grid item xs={12} className={classes.header}>
          {console.log(currentUser)}
          {currentUser.displayName ? (
            <Typography align="center" variant="h3">
              Welcome back {userDisplay.replace(/\"/g, '')}, Choose where you
              want to go!
            </Typography>
          ) : (
            <div>
              <Typography align="center" variant="h3">
                Welcome new user, Choose where you want to go!
              </Typography>
              <Typography align="center" variant="h6">
                Change your display name
              </Typography>
            </div>
          )}
        </Grid>
      </Grid>
      <div className={classes.root} justify="space-around">
        <Grid container direction="row" justify="space-around">
          <Grid item md xs={12}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Physical Health"
                  height="350"
                  image={Physical}
                  title="Physical Health"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    compoenent="h2"
                    align="center"
                  >
                    Physical Health
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Divider variant="middle" />
              <CardActions>
                <Button size="large" className={classes.button}>
                  <Link href="/recipes" color="inherit">
                    Better yourself by Learning new Recipes
                  </Link>
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item md xs={12}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Mental Health"
                  height="350"
                  image={Mental}
                  title="Mental Health"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    compoenent="h2"
                    align="center"
                  >
                    Mental Health
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Divider variant="middle" />
              <CardActions>
                <Button size="large" className={classes.button}>
                  <Link href="/journals" color="inherit">
                    Express Yourself in Writing
                  </Link>
                </Button>
                <Button size="large" className={classes.button}>
                  <Link href="/meditation" color="inherit">
                    Benefits of Meditation
                  </Link>
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item md xs={12}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Chat"
                  height="350"
                  image={Chat}
                  title="Chat"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    compoenent="h2"
                    align="center"
                  >
                    Chat
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Divider variant="middle" />
              <CardActions>
                <Button size="large" className={classes.button}>
                  <Link href="/chat" color="inherit">
                    Enter the Chat
                  </Link>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
