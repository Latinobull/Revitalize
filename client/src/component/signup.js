import React from 'react';

export default function Signup() {
  return (
    <div>
      <form>
        <h1>Signup</h1>
        <label>
          Email:
          <input type="email" name="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input type="password" name="password" placeholder="Password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
