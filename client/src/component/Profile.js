import React from 'react';
import { useAuth } from '../Authenticate/AuthContext';

export default function Profile({ match }) {
  const { currentUser } = useAuth();
  const {
    params: { uid },
  } = match;
  return (
    <div>
      <h1>User Page</h1>
      <img src="https://via.placeholder.com/150/" />
      <form>
        <input type="file" onChange />
      </form>
      <p>
        <strong>User ID: </strong>
        {uid}
      </p>
    </div>
  );
}
