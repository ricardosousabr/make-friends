import { useNavigate } from 'react-router-dom';
import { firebase, auth } from '../services/firebase.ts';
import { useContext, useState } from 'react';
import { AuthContext } from '../App'

import googleImg from '../assets/img/google-icon.svg';

import '../styles/home.scss';

export function Home() {
  const createRom = useNavigate()
  const {test, setTest} = useContext(AuthContext)
  const [userData, setUserData] = useState({
    name: "",
    avatar: "",
    id: "",
  })

  async function handleLoginButton() {
    const provider = new firebase.auth.GoogleAuthProvider()
    const result = await auth.signInWithPopup(provider)

    if (result.user) {
      const { uid, photoURL, displayName } = result.user

      if (!displayName || !uid) {
        throw new Error('Uuario não logado')
      }

      setUserData({
        name: displayName,
        avatar: photoURL,
        id: uid,
      })
    }

    createRom('/create-room')
  }

  return (
    <div id="home">
      <main>
        <div>
          <h1>{test}</h1>
          <p>{userData.name}</p>
          <p>{userData.id}</p>
        <p>
          Bem vindo ao Make friends, junte-se a varias pessoas e se divirta.
        </p>
        </div>
        <div>
        <button onClick={handleLoginButton}>
          <img src={googleImg} alt="" />  Entre com o Google
        </button>
        </div>
      </main>
    </div>
  )
}