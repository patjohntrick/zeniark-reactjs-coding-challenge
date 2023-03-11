import React, { useContext, createContext, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage, QuizPage, ResultPage } from './pages/';
import './styles/main.scss';
import { StyledBackground } from './components';
import { useRandomQuestions } from './hooks/';
import { data } from './constant/';

export const AppContext = createContext();

function App() {
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [finalTenQuestions, setFinalTenQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const { randomData, isError } = useRandomQuestions(data);

  // useEffect(() => {
  //   if (!isError) {
  //     setQuestions(randomData);
  //   }
  // }, []);

  // console.log(questions);

  return (
    <AppContext.Provider
      value={{
        questions,
        setQuestions,
        score,
        setScore,
        userAnswers,
        setUserAnswers,
        finalTenQuestions,
        setFinalTenQuestions,
      }}
    >
      <BrowserRouter>
        <div className='App'>
          <StyledBackground>
            <Routes>
              <Route element={<HomePage />} path='/' />
              <Route element={<QuizPage />} path='quiz/' />
              <Route element={<ResultPage />} path='quiz/result/' />
            </Routes>
          </StyledBackground>
        </div>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
