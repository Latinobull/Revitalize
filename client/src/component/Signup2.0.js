import React, { useRef, useState } from 'react';
import { useAuth } from '../Authenticate/AuthContext';
export default function Signup() {
  const { Signup, currentUser } = useAuth;
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('The Passswords Do Not Match. Please Try Again');
    }

    try {
      setError('');
      await Signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError('Failed to set up Account. Please Try Again');
    }
  }

  return (
    <div>
      {currentUser && currentUser.email}
      <form onSubmit={handleSubmit}>
        <h1>Signup</h1>
        <label>
          Email:
          <input
            type="Email"
            name="Email"
            placeholder="Email"
            ref={emailRef}
            required
          />
        </label>
        <label>
          Password
          <input
            type="Password"
            name="Password"
            placeholder="Password"
            ref={passwordRef}
            required
          />
        </label>
        <label>
          Password Confirmation
          <input
            type="Password"
            name="PasswordConfirm"
            placeholder="Password"
            ref={passwordConfirmRef}
            required
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
      {error && <h4>{error}</h4>}
    </div>
  );
}
