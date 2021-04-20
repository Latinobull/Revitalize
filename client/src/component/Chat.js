import React, { useState, useEffect } from 'react';
import 'firebase/firestore';
import firebase from 'firebase/app';
export default function Chat() {
  const [messages, setMessages] = useState([]);
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
  return (
    <form>
      <label>Welcome</label>
      <button>Do you work?</button>
      <ul>
        {messages.map(message => (
          <li key={message.id}>{message.text}</li>
        ))}
      </ul>
    </form>
  );
}
