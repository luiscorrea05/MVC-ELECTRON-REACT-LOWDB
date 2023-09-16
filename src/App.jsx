import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import electronLogo from '/electron.svg';
import './App.css';
const { ipcRenderer, shell } = window.electron;

function App() {
  const [count, setCount] = useState("");

  const handleLinkClick = (url) => {
    shell.openExternal(url);
  };

  const apiE = async () => {
    const result = await ipcRenderer.invoke('/')
    if (count) {
      setCount("")
    } else {
      setCount(result)
    }
  }

  return (
    <div className="App">
      <div>
        <img
          src={electronLogo}
          className="logo electron"
          alt="React logo"
          onClick={() => handleLinkClick('https://www.electronjs.org/es/')}
        />
        <img
          src={viteLogo}
          className="logo"
          alt="Vite logo"
          onClick={() => handleLinkClick('https://vitejs.dev')}
        />
        <img
          src={reactLogo}
          className="logo react"
          alt="React logo"
          onClick={() => handleLinkClick('https://reactjs.org')}
        />
      </div>
      <h1>Electron (Vite + React)</h1>
      <input type="text" value={count} disabled />
      <div className="card">
        <button onClick={apiE}>
          Clik
        </button>
        <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
      </div>
      <p className="read-the-docs">
        Click on the Electron ,Vite and React logos for more information.
      </p>
    </div>
  );
}

export default App;
