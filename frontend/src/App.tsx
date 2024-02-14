import React from 'react';
import './App.css';
import Header from './components/Header';
import AppRoutes from './routes/AppRoutes';
import useApplyTheme from './app/hooks/useApplyTheme';

const App: React.FC = () => {
  useApplyTheme();

  return (
    <div className="App">
      <Header />
      <main>
        <AppRoutes />
      </main>
    </div>
  );
};

export default App;
