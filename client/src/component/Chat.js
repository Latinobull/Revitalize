import React, { useState } from 'react';
import { useStore } from '../Authenticate/Firestore';
export default function Chat() {
  //   const { Test } = useStore();
  const [error, setError] = useState();

  async function handleTest(e) {
    e.preventDefault();

    // try {
    //   setError('');
    //   await Test();
    //   console.log('it worked');
    // } catch {
    //   setError('Something went wrong');
    // }
  }
  return (
    <form onSubmit={handleTest}>
      <label>Welcome</label>
      <button>Do you work?</button>
      {error && <h4>{error}</h4>}
    </form>
  );
}
