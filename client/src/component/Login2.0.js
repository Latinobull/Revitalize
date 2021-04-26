import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../Authenticate/AuthContext';
import Logo from '../assets/images/Main-Page-Photos/Revitalize-Logo.png';
import {
  CssBaseline,
  Grid,
  makeStyles,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const useStyle = makeStyles(theme => ({
  root: {
    height: '100vh',
    backgroundColor: '#F7E6E3',
  },
  image: {
    backgroundImage: `url(${Logo} )`,
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#303179',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#303179',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#303179',
  },
}));

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { Login, currentUser } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await Login(emailRef.current.value, passwordRef.current.value);
      history.push('/');
    } catch {
      setError('Failed to log in. Please Try Again');
    }
    setLoading(false);
  }

  const classes = useStyle();
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      {console.log(currentUser)}
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.root}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log In
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="Email Address"
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="email"
              inputRef={emailRef}
              required
            />

            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              type="Password"
              name="Password"
              label="Password"
              placeholder="Password"
              inputRef={passwordRef}
              required
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={loading}
            >
              Log In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/signup" variant="body2">
                  Don't have an account?
                </Link>
              </Grid>
            </Grid>
          </form>
          {error && <h4>{error}</h4>}
        </div>
      </Grid>
    </Grid>
  );
}
