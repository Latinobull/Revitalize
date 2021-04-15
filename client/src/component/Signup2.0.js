import React, { useRef, useState } from 'react';
import { useAuth } from '../Authenticate/AuthContext';
import { Link, useHistory } from 'react-router-dom';
export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { Signup, currentUser } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('The Passswords Do Not Match. Please Try Again');
    }

    try {
      setError('');
      setLoading(true);
      await Signup(emailRef.current.value, passwordRef.current.value);
      history.push('/');
    } catch {
      setError('Failed to set up Account. Please Try Again');
    }
    setLoading(false);
  }

  return (
    <div>
      {console.log(currentUser)}
      {/* {currentUser && currentUser.email} */}
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
      <div>
        Already have an Account? <Link to="/login">Login</Link>
      </div>
      {error && <h4>{error}</h4>}
    </div>
  );
}
