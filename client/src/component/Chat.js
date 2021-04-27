import React, { useState, useEffect, useRef } from 'react';
import 'firebase/firestore';
import firebase from 'firebase/app';
import { useAuth } from '../Authenticate/AuthContext';
import Message from './Message';
import 'date-fns';
import {
  Avatar,
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Background from '../assets/images/recipes.PNG';
export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const inputRef = useRef();
  const { currentUser } = useAuth();
  const { uid, displayName, photoURL } = currentUser;
  const db = firebase.firestore();
  const query = db.collection('messages').orderBy('createdAt').limit(100);
  const messagesRef = db.collection('messages');

  useEffect(() => {
    const unsubscribe = query.onSnapshot(querySnapshot => {
      const data = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }));

      setMessages(data);
    });

    return unsubscribe;
  }, []);

  const handleChange = e => {
    setNewMessage(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const trimmedMessage = newMessage.trim();
    if (trimmedMessage) {
      messagesRef.add({
        text: trimmedMessage,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        displayName,
        photoURL,
      });
      setNewMessage('');
    }
  };

  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    chatSection: {
      width: '100%',
      height: '80vh',
    },
    headBG: {
      backgroundColor: '#e0e0e0',
    },
    borderRight500: {
      borderRight: '1px solid #e0e0e0',
    },
    messageArea: {
      height: '70vh',
      overflowY: 'auto',
      paddingRight: '35px',
    },
  });

  const classes = useStyles();
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  });
  return (
    <div className="bg" style={{ backgroundImage: `url(${Background})` }}>
      <Grid container>
        <Grid item xs={12}>
          <Typography
            variant="h3"
            className="header-message"
            align="center"
          ></Typography>
        </Grid>
      </Grid>
      <Grid container className={classes.chatSection}>
        <Grid item xs={3} className={classes.borderRight500}>
          <List>
            <ListItem button key="RemySharp">
              <ListItemIcon>
                <Avatar alt="RemySharp" src={currentUser.photoURL}></Avatar>
              </ListItemIcon>
              <ListItemText primary={currentUser.displayName}></ListItemText>
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button key="RemySharp">
              <ListItemIcon>
                <Avatar>
                  <AccountCircle />
                </Avatar>
              </ListItemIcon>
              <ListItemText>Esiena</ListItemText>
            </ListItem>
            <ListItem button key="RemySharp">
              <ListItemIcon>
                <Avatar>
                  <AccountCircle />
                </Avatar>
              </ListItemIcon>
              <ListItemText>Alex</ListItemText>
            </ListItem>
            <ListItem button key="RemySharp">
              <ListItemIcon>
                <Avatar>
                  <AccountCircle />
                </Avatar>
              </ListItemIcon>
              <ListItemText>Adia</ListItemText>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={9}>
          <List className={classes.messageArea}>
            {messages.map(message => (
              <li key={message.id}>
                {' '}
                <Message {...message} />
              </li>
            ))}
            <div ref={divRef}></div>
          </List>
          <Divider />
          <form onSubmit={handleSubmit}>
            <Grid container style={{ padding: '20px' }}>
              <Grid item xs={11}>
                <TextField
                  id="outlined-basic-email"
                  ref={inputRef}
                  type="text"
                  value={newMessage}
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  fullWidth
                />
              </Grid>
              <Grid xs={1} align="right">
                <Button type="submit" disabled={!newMessage}>
                  <SendIcon />
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}
