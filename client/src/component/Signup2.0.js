import React, { useRef, useState } from 'react';
import { useAuth } from '../Authenticate/AuthContext';
export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('The Passswords Do Not Match. Please Try Again');
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError('Failed to set up Account. Please Try Again');
      setLoading(false);
    }
  }

  return (
    <div>
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
        <button type="submit" disabled={loading}>
          Sign Up
        </button>
      </form>
      {error && <h4>{error}</h4>}
    </div>
  );
}
