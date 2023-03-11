import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineCheck } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';

import '../styles/questionCard.scss';
import { AppContext } from '../App';
import { StyledCard, StyledHeaderCard } from '../components';
import { buttonOptions } from '../constant';

export const QuizPage = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const {
    score,
    setScore,
    questions,
    setUserAnswers,
    userAnswers,
    setFinalTenQuestions,
  } = useContext(AppContext);
  const { category, question, correct_answer } = questions[questionNumber];

  const navigate = useNavigate();

  const scoreCounter = (userAnswer) => {
    if (userAnswer === correct_answer) {
      setScore(score + 1);
    }
  };

  const handleClick = (userAnswer) => {
    if (questionNumber >= 9) {
      setQuestionNumber(0);
      setUserAnswers((prevUserState) => [...prevUserState, userAnswer]);
      navigate('result/');
    } else {
      scoreCounter(userAnswer);
      setUserAnswers((prevUserState) => [...prevUserState, userAnswer]);
      setQuestionNumber(questionNumber + 1);
    }
  };

  useEffect(() => {
    setFinalTenQuestions((prevTenState) => [
      ...prevTenState,
      questions[questionNumber],
    ]);
  }, [questionNumber]);

  return (
    <StyledCard>
      <div>
        <StyledHeaderCard category={category} questionNumber={questionNumber} />
        <div className='question-container'>
          <p className='question'>{question}</p>
        </div>
        <div className='question-button-container'>
          {buttonOptions.map((btn) => {
            return (
              <button
                key={btn.id}
                className='question-button'
                style={{ backgroundColor: btn.backgroundColor }}
                onClick={() => handleClick(btn.text)}
              >
                {btn.id > 1 ? (
                  <AiOutlineCheck className='icon' />
                ) : (
                  <FaTimes className='icon' />
                )}
                <p className='button-text'>{btn.text}</p>
              </button>
            );
          })}
        </div>
      </div>
    </StyledCard>
  );
};
