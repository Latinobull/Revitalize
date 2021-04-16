import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useAuth } from '../Authenticate/AuthContext';

export default function Main_Page() {
  const [error, setError] = useState('');
  const { Logout, currentUser } = useAuth();
  const history = useHistory();

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

  return (
    <div>
      {currentUser.displayName ? (
        <h2>{userDisplay}</h2>
      ) : (
        <h2>Welcome new User, please click here to make a new Display Name</h2>
      )}

      <h1>Revitalize</h1>
      <button onClick={handleLogut}>Log Out</button>
      {error && <h5>{error}</h5>}
    </div>
  );
}
