import React, { useContext } from 'react';
import { db } from '../firebase';

import 'firebase/firestore';

const StoreContext = React.createContext();
export function useStore() {
  return useContext(StoreContext);
}
export function Firestore(children) {
  function Test() {
    db.collection('users')
      .add({
        first: 'Ada',
        last: 'Lovelace',
        born: 1815,
      })
      .then(docRef => {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch(error => {
        console.error('Error adding document: ', error);
      });
  }
  const value = {
    Test,
  };
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
}
