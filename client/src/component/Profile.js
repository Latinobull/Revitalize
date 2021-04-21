import React, { useRef, useState } from 'react';
import { useAuth } from '../Authenticate/AuthContext';

export default function Profile({ match }) {
  const [error, setError] = useState('');
  const displayNameRef = useRef();
  const { currentUser } = useAuth();
  const {
    params: { uid },
  } = match;
  async function handleNameChange() {
    try {
      setError('');
      await currentUser.updateProfile({
        displayName: displayNameRef.current.value,
      });
    } catch {
      setError('Something went wrong changing your name');
    }
  }
  return (
    <div>
      <h1>{currentUser.displayName}'s Page</h1>
      <img src="https://via.placeholder.com/150/" />
      <form>
        <input type="file" onChange />
      </form>
      <form onSubmit={handleNameChange}>
        <input
          type="name"
          name="DisplayName"
          placeholder="DisplayName"
          ref={displayNameRef}
        ></input>
        <button type="submit">Change Display Name</button>
      </form>
      <p>
        <strong>User ID: </strong>
        {uid}
      </p>
    </div>
  );
}
