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
      {error && <h5>{error}</h5>}
    </div>
  );
}
