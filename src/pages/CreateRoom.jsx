import React from 'react';
import '../styles/createRoom.scss';

export function CreateRoom() {
  return (
    <div id="create-room">
      <main>
        <div>
          <h1>Crie sua sala do seu jeito ou entre e uma sala.</h1>
        </div>
        <div className="card">
          <button>Criar sala</button>
        </div>
        <div className="card">
          <p>Escreva o código da sala</p>
          <input />
        </div>
      </main>
    </div>
  );
}
