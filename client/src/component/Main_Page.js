import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useAuth } from '../Authenticate/AuthContext';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
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
