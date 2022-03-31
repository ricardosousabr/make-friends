import { useNavigate } from 'react-router-dom';
import React, { useContext } from 'react';
import { AuthContext } from '../context/Auth';

import googleImg from '../assets/img/google-icon.svg';

import '../styles/home.scss';

export function Home() {
  const createRom = useNavigate();

  const { user, loginUser } = useContext(AuthContext);

  async function handleLoginButton() {
    if (!user) {
      await loginUser();
    }
    createRom('/rooms/new');
  }

  return (
    <div id="home">
      <main>
        <div>
          <p>
            Bem vindo ao Make friends, junte-se a varias pessoas e se divirta.
          </p>
        </div>
        <div>
          <button onClick={handleLoginButton}>
            <img src={googleImg} alt="" /> Entre com o Google
          </button>
        </div>
      </main>
    </div>
  );
}
