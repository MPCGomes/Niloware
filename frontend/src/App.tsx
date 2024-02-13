import React from 'react';
import './App.css';
import Header from './components/Header';
import { ThemeProvider } from './contexts/ThemeContext';
import { BrowserRouter as Router} from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Header />
          <AppRoutes />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
