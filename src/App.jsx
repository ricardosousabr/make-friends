import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home';
import { CreateRoom } from './pages/CreateRoom';
import { AuthContextProvider } from './context/Auth';
import { Room } from './pages/Room';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms/new" element={<CreateRoom />} />
            <Route path="/rooms/:id" element={<Room />} />
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
