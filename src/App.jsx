import { Home } from './pages/Home'
import { CreateRoom } from './pages/CreateRoom'
import { createContext, useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const AuthContext = createContext({})

function App() {
  const [test, setTest] = useState('Ola Mundo')

  return (
    <div className="App">
      <BrowserRouter>
        <AuthContext.Provider value={{ test, setTest }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-room" element={<CreateRoom />} />
          </Routes>
        </AuthContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
