import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { ThemeProvider } from './contexts/ThemeContext';
import ReactDOM from 'react-dom';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </ThemeProvider>
  );
}

export default App;
