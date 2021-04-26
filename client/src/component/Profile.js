import React, { useRef, useState } from 'react';
import { useAuth } from '../Authenticate/AuthContext';
import firebase from 'firebase/app';
import '@firebase/storage';
import app from '../firebase';
import {
  Avatar,
  Button,
  CssBaseline,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    backgroundColor: '#F7E6E3',
  },
  displayImage: {
    maxHeight: 500,
    maxWidth: 500,
    alignSelf: 'center',
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
  myname: {
    color: '#12248d',
    marginBottom: '10px',
    // font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#303179',
  },
}));

export default function Profile() {
  const [error, setError] = useState('');
  const displayNameRef = useRef();
  const { currentUser } = useAuth();
  var imageURL;
  var file;
  const onFileChange = e => {
    file = e.target.files[0];
    const storageRef = app
      .storage()
      .ref('users/' + currentUser.uid + '/profile.jpg');
    const fileRef = storageRef.child(file.name);
    fileRef.put(file).then(() => {
      //ASK TA WHY THIS HAS TO BE HERE
      console.log('image:' + file);
    });
  };
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError('');
      await firebase
        .storage()
        .ref('users/' + currentUser.uid + '/profile.jpg')
        .put(file)
        .then(() => {
          firebase
            .storage()
            .ref('users/' + currentUser.uid + '/profile.jpg')
            .getDownloadURL()
            .then(url => {
              imageURL = url;
            })
            .then(() => {
              currentUser.updateProfile({
                displayName: displayNameRef.current.value,
                photoURL: imageURL,
              });
              console.log(imageURL);
              file = currentUser.photoURL;
            })
            .then(() => {
              window.location.reload();
            });
        });
    } catch (err) {
      console.log(err);
      setError('Something went wrong changing your name');
    }
  }
  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={5}>
        <Typography variant="h1">{currentUser.displayName}'s Page</Typography>
        <img src={currentUser.photoURL} className={classes.displayImage} />
      </Grid>
      <Divider orientation="vertical" flexItem />
      <Avatar className={classes.avatar}></Avatar>
      <form>
        <input type="file" onChange={onFileChange} />
        <input
          type="name"
          name="DisplayName"
          placeholder="DisplayName"
          ref={displayNameRef}
        ></input>
        <Button onClick={handleSubmit} size="small" className={classes.button}>
          Change Display Name
        </Button>
      </form>
      {/* <p>
        <strong>User ID: </strong>
        {uid}
      </p> */}
      {error && <h5>{error}</h5>}
    </Grid>
  );
}
