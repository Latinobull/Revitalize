import React, { useState, useEffect, useRef } from 'react';
import 'firebase/firestore';
import firebase from 'firebase/app';
import { useAuth } from '../Authenticate/AuthContext';
import Message from './Message';
import 'date-fns';
import {
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
} from '@material-ui/core';
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
    },
  });

  const classes = useStyles();

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h5" className="header-message">
            Revitalize Chat
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={classes.chatSection}>
        <List>
          <ListItem button key="RemySharp">
            <ListItemIcon>
              <Avatar alt="RemySharp" src={currentUser.photoURL}></Avatar>
            </ListItemIcon>
            <ListItemText primary={currentUser.displayName}></ListItemText>
          </ListItem>
        </List>
        <Grid item xs={3} className={classes.borderRight500}></Grid>
        <ul>
          {messages.map(message => (
            <li key={message.id}>
              {' '}
              <Message {...message} />
            </li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="text"
            value={newMessage}
            onChange={handleChange}
            placeholder="Type your message here..."
          />
          <button type="submit" disabled={!newMessage}>
            Send
          </button>
        </form>
      </Grid>
    </div>
  );
}
