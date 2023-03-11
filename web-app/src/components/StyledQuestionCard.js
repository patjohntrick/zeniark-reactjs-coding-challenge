import { Link } from 'react-router-dom';
import { AiOutlineCheck } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';

import '../styles/questionCard.scss';
import { StyledCard } from './StyledCard';
import background from '../images/logo.png';
import { useState } from 'react';

export const StyledQuestionCard = ({
  category,
  questionNumber,
  question,
  onClick,
  to,
}) => {
  const [userAnswer, setUserAnswer] = useState(false);
  console.log(userAnswer);
  return (
    <div>
      <div className='question-card-container'>
        <div className='header'>
          <img src={background} alt='Zeniark Logo' className='question-logo' />
          <h4>{`Category: ${category}`}</h4>
        </div>
        <p className='question-counter'>{`${questionNumber} of 10`}</p>
      </div>
      <div className='question-container'>
        <p className='question'>{question}</p>
      </div>
      <div className='question-button-container'>
        <button
          className='question-button button-true'
          onClick={() => setUserAnswer(true)}
        >
          <AiOutlineCheck className='icon' />
          <Link to={to} className='button-text'>
            True
          </Link>
        </button>
        <button
          className='question-button button-false'
          onClick={() => setUserAnswer(false)}
        >
          <FaTimes className='icon' />
          <Link to={to} className='button-text'>
            False
          </Link>
        </button>
      </div>
    </div>
  );
};
