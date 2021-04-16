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
      {console.log(currentUser)}
      {currentUser.displayName ? (
        <div>
          <h1>Revitalize</h1>
          <h6>Welcome Back {userDisplay}</h6>
        </div>
      ) : (
        <div>
          <h1>Revitalize</h1>
          <h6>Welcome new User, change your display name down below!</h6>
        </div>
      )}
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
