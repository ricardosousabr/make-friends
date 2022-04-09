import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/Auth';
import { database } from '../services/firebase';
import { Menu } from '../components/Menu';
import '../styles/createRoom.scss';

export function CreateRoom() {
  const [newRoom, setNewRoom] = useState('');
  const { user } = useContext(AuthContext);
  const Navigate = useNavigate();

  async function handleCreateRoom() {
    if (newRoom.trim() === '') {
      return console.log('Sala errada');
    }

    const roomsRef = database.ref('room');
    const firebaseRoom = await roomsRef.push({
      title: newRoom,
      authorId: user.id,
      authorName: user?.name,
    });

    Navigate(`/rooms/${firebaseRoom.key}}`);
    console.log(firebaseRoom);
  }

  return (
    <div>
      <div>
        <Menu />
      </div>
      <div id="create-room">
        <main>
          <div>
            <h1>Crie sua sala do seu jeito ou entre e uma sala.</h1>
          </div>
          <div className="card">
            <button onClick={handleCreateRoom}>Criar sala</button>
          </div>
          <div className="card">
            <p>Escreva o código da sala</p>
            <form onSubmit={handleCreateRoom}>
              <input
                value={newRoom}
                onChange={(e) => setNewRoom(e.target.value)}
              />
            </form>
            <p></p>
          </div>
        </main>
      </div>
    </div>
  );
}
