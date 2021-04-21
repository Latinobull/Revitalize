import React, { useRef, useState } from 'react';
import { useAuth } from '../Authenticate/AuthContext';
import firebase from 'firebase/app';
import '@firebase/storage';
export default function Profile({ match }) {
  const [error, setError] = useState('');
  const displayNameRef = useRef();
  const [file, setFile] = useState();
  const [isSelected, setIsSelected] = useState(false);
  const { currentUser } = useAuth();
  const {
    params: { uid },
  } = match;

  function chooseFile(event) {
    setFile(event.target.files[0]);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError('');
      await currentUser
        .updateProfile({
          displayName: displayNameRef.current.value,
        })
        .then(() => {
          firebase
            .storage()
            .ref('users/' + currentUser.uid + '/profile.jpg')
            .put(setFile)
            .then(() => {
              console.log('it works');
            });
        });
    } catch (err) {
      console.log(err);
      setError('Something went wrong changing your name');
    }
  }
  return (
    <div>
      <h1>{currentUser.displayName}'s Page</h1>
      <img src="https://via.placeholder.com/150/" />
      <form>
        <input type="file" onChange={chooseFile} />
        <input
          type="name"
          name="DisplayName"
          placeholder="DisplayName"
          ref={displayNameRef}
        ></input>
        <button onClick={handleSubmit}>Change Display Name</button>
      </form>
      <p>
        <strong>User ID: </strong>
        {uid}
      </p>
      {error && <h5>{error}</h5>}
    </div>
  );
}
