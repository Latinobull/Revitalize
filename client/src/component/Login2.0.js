import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../Authenticate/AuthContext';


export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { Login, currentUser } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await Login(emailRef.current.value, passwordRef.current.value);
      history.push('/');
    } catch {
      setError('Failed to log in. Please Try Again');
    }
    setLoading(false);
  }

  return (
    <div>
      {console.log(currentUser)}
      {/* How to pull out current User {currentUser && currentUser.email} */}
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
      <div>
        Need to create an account? <Link to="/signup">Sign Up</Link>
      </div>

      {error && <h4>{error}</h4>}
    </div>
  );
}
