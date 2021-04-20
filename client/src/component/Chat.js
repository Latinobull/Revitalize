import React, { useState, useEffect, useRef } from 'react';
import 'firebase/firestore';
import firebase from 'firebase/app';
import { useAuth } from '../Authenticate/AuthContext';
import Message from './Message';
import 'date-fns';
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
    // Subscribe to query with onSnapshot
    const unsubscribe = query.onSnapshot(querySnapshot => {
      // Get all documents from collection - with IDs
      const data = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }));
      // Update state
      setMessages(data);
    });

    // Detach listener
    return unsubscribe;
  }, []);

  const handleChange = e => {
    setNewMessage(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const trimmedMessage = newMessage.trim();
    if (trimmedMessage) {
      // Add new message in Firestore
      messagesRef.add({
        text: trimmedMessage,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        displayName,
        photoURL,
      });
      // Clear input field
      setNewMessage('');
    }
  };
  return (
    <div>
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
    </div>
  );
}
