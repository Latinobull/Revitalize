import React, { useRef, useState } from 'react';
import { useAuth } from '../Authenticate/AuthContext';
export default function Signup() {
  const { Signup } = useAuth;
  const emailRef = useRef();
  const PasswordRef = useRef();
  const PasswordConfirmRef = useRef();
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    Signup(emailRef.current.value, PasswordRef.current.value);
  }

  return (
    <div>
      <form>
        <h1>Signup</h1>
        <label>
          Email:
          <input type="Email" name="Email" placeholder="Email" ref={emailRef} />
        </label>
        <label>
          Password
          <input
            type="Password"
            name="Password"
            placeholder="Password"
            ref={PasswordRef}
          />
        </label>
        <label>
          Password Confirmation
          <input
            type="Password"
            name="Password"
            placeholder="Password"
            ref={PasswordConfirmRef}
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
