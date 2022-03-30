import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { firebase, auth } from '../services/firebase';

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({
    name: '',
    avatar: '',
    id: '',
  });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { uid, photoURL, displayName } = user;

        if (!displayName || !uid) {
          throw new Error('Usuario não logado');
        }

        setUser({
          name: displayName,
          avatar: photoURL,
          id: uid,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  async function loginUser() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await auth.signInWithPopup(provider);

    if (result.user) {
      const { uid, photoURL, displayName } = result.user;

      if (!displayName || !uid) {
        throw new Error('Usuario não logado');
      }

      setUser({
        name: displayName,
        avatar: photoURL,
        id: uid,
      });
    }
  }

  return (
    <AuthContext.Provider value={{ user, loginUser }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthContextProvider.propTypes = {
  children: PropTypes.element,
};
