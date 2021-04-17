import React, { useContext } from 'react';
import { db } from '../firebase';
import {collection, addDoc} from 'firebase/firestore'
const StoreContext = React.createContext();
export function useStore() {
  return useContext(StoreContext);
}
export function Firestore(children) {
    function Test() {
        try {
            const docRef = await addDoc(collection(db, "users"), {
              first: "Ada",
              last: "Lovelace",
              born: 1815
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }
  const value = {
      Test
  };
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
}
