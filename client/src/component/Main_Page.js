import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { useAuth } from '../Authenticate/AuthContext';

export default function Main_Page() {
  const [error, setError] = useState('');
  const { Logout, currentUser } = useAuth();
  const history = useHistory();
  const displayNameRef = useRef();

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

  async function handleNameChange() {
    setError('');
    try {
      await currentUser.updateProfile({
        displayName: displayNameRef.current.value,
      });
    } catch {
      setError('Something went wrong changing your name');
    }
  }

  return (
    <div>
      {console.log(currentUser)}
      {currentUser.displayName ? (
        <h2>Welcome Back{userDisplay}</h2>
      ) : (
        <h2>Welcome new User, please click here to make a new Display Name</h2>
      )}
      <h1>Revitalize</h1>
      <button onClick={handleLogut}>Log Out</button>
      <br />
      <form onSubmit={handleNameChange}>
        <input
          type="name"
          name="DisplayName"
          placeholder="DisplayName"
          ref={displayNameRef}
        ></input>
        <button type="submit">Change Display Name</button>
      </form>
      {error && <h5>{error}</h5>}
    </div>
  );
}
