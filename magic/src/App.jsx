import './App.css';

import React from 'react';
import { Outlet } from 'react-router-dom';

import NavBar from './components/NavBar';

const App = () => {
  return (
    <>
      <NavBar />
      <div className="App">
        <header>
          <h1>Found your House </h1>
          <h2>🧙🏼‍♂️ + 🏠 = 🛡️</h2>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default App;
