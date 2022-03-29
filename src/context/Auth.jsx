import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { firebase, auth } from '../services/firebase';

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({
    name: '',
    avatar: '',
    id: '',
  });

  async function loginUser() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await auth.signInWithPopup(provider);

    if (result.user) {
      const { uid, photoURL, displayName } = result.user;

      if (!displayName || !uid) {
        throw new Error('Uuario não logado');
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
