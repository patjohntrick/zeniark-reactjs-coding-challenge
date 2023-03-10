import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage, QuizPage } from './pages/';

import './styles/main.scss';
import { StyledBackground } from './components';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <StyledBackground>
          <Routes>
            <Route element={<HomePage />} path='/' />
            <Route element={<QuizPage />} path='quiz' />
          </Routes>
        </StyledBackground>
      </div>
    </BrowserRouter>
  );
}

export default App;
