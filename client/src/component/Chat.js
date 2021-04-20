import React, { useState, useEffect, useRef } from 'react';
import 'firebase/firestore';
import firebase from 'firebase/app';
export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const inputRef = useRef();
  const db = firebase.firestore();
  const query = db.collection('messages').orderBy('createdAt').limit(100);
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

  const handleOnChange = e => {
    setNewMessage(e.target.value);
  };

  return (
    <div>
      <ul>
        {messages.map(message => (
          <li key={message.id}>{message.text}</li>
        ))}
      </ul>
      <form onSubmit>
        <input
          ref={inputRef}
          type="text"
          value={newMessage}
          onChange={handleOnChange}
          placeholder="Type your message here..."
        />
        <button type="submit" disabled={!newMessage}>
          Send
        </button>
      </form>
    </div>
  );
}
