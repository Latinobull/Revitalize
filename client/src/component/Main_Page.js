import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useAuth } from '../Authenticate/AuthContext';

export default function Main_Page() {
  const [error, setError] = useState('');
  const { Logout } = useAuth();
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
  return (
    <div>
      <h1>Revitalize</h1>
      <button onClick={handleLogut}>Log Out</button>
      {error && <h5>{error}</h5>}
    </div>
  );
}
