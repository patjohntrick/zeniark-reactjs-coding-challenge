import { useContext, useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineCheck } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';

import { AppContext } from '../App';

import '../styles/questionCard.scss';
import { StyledCard, StyledHeaderCard } from '../components';
import background from '../images/logo.png';
import { buttonOptions, data } from '../constant';
import { useRandomQuestions } from '../hooks';

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
    if (questionNumber + 1 >= 10) {
      setQuestionNumber(0);
      navigate('result/');
    } else {
      setUserAnswers((prevUserState) => [...prevUserState, userAnswer]);
      scoreCounter(userAnswer);
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
