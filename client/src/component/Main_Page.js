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
  makeStyles,
  Typography,
} from '@material-ui/core';
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
      <Grid container>
        <Grid item xs={12} className={classes.header}>
          {console.log(currentUser)}
          {currentUser.displayName ? (
            <div>
              <h4>Ready to reinvent how your everyday life</h4>
              <h6>Welcome Back {userDisplay}</h6>
            </div>
          ) : (
            <div>
              <h1>Ready to reinvent how your everyday life</h1>
              <h6>Welcome new User, change your display name down below!</h6>
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
                  height="200"
                  image=""
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
                  Enter the Physical Health Section
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
                  height="200"
                  image=""
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
                  Enter the Mental Health Section
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
                  height="200"
                  image=""
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
                  Enter the Chat
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
      {/* <button onClick={handleLogut}>Log Out</button> */}
      <br />
      {error && <h5>{error}</h5>}
    </div>
  );
}
