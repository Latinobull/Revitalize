import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  function Signup(email, password) {
    return auth.createUserWithEmailAandPassword(email, password);
  }

  useEffect(() => {
    const userSet = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });
    return userSet;
  });

  const value = {
    currentUser,
    Signup,
  };
  return (
    <AuthProvider.Provider value={value}>{children}</AuthProvider.Provider>
  );
}
