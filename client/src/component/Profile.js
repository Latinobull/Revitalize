import React, { useRef, useState } from 'react';
import { useAuth } from '../Authenticate/AuthContext';
import firebase from 'firebase/app';
import '@firebase/storage';
import app from '../firebase';
export default function Profile({}) {
  const [error, setError] = useState('');
  const displayNameRef = useRef();
  const { currentUser } = useAuth();
  var imageURL;
  var file;
  const onFileChange = e => {
    file = e.target.files[0];
    const storageRef = app
      .storage()
      .ref('users/' + currentUser.uid + '/profile.jpg');
    const fileRef = storageRef.child(file.name);
    fileRef.put(file).then(() => {});
  };
  async function handleSubmit() {
    try {
      setError('');
      await firebase
        .storage()
        .ref('users/' + currentUser.uid + '/profile.jpg')
        .put(file)
        .then(() => {
          firebase
            .storage()
            .ref('users/' + currentUser.uid + '/profile.jpg')
            .getDownloadURL()
            .then(url => {
              imageURL = url;
            })
            .then(() => {
              currentUser.updateProfile({
                displayName: displayNameRef.current.value,
                photoURL: imageURL,
              });
              console.log(imageURL);
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
      <img src={currentUser.photoURL} />
      <form>
        <input type="file" onChange={onFileChange} />
        <input
          type="name"
          name="DisplayName"
          placeholder="DisplayName"
          ref={displayNameRef}
        ></input>
        <button onClick={handleSubmit}>Change Display Name</button>
      </form>
      {/* <p>
        <strong>User ID: </strong>
        {uid}
      </p> */}
      {error && <h5>{error}</h5>}
    </div>
  );
}
