import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
export default function Chat() {
  //   const { Test } = useStore();
  const [error, setError] = useState();
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
  //   async function handleTest(e) {
  //     e.preventDefault();

  // try {
  //   setError('');
  //   await Test();
  //   console.log('it worked');
  // } catch {
  //   setError('Something went wrong');
  // }
  //   }
  return (
    <form>
      <label>Welcome</label>
      <button>Do you work?</button>
      <ul>
        {messages.map(message => (
          <li key={message.id}>{message.text}</li>
        ))}
      </ul>
      {error && <h4>{error}</h4>}
    </form>
  );
}
