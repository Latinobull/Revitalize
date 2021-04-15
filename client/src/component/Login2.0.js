import React, { useRef, useState } from 'react';
import { useAuth } from '../Authenticate/AuthContext';
export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { Signup, currentUser } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await Signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError('Failed to set up Account. Please Try Again');
    }
    setLoading(false);
  }

  return (
    <div>
      {currentUser && currentUser.email}
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
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
        <button type="submit" disabled={loading}>
          Log In
        </button>
      </form>
      {error && <h4>{error}</h4>}
    </div>
  );
}
