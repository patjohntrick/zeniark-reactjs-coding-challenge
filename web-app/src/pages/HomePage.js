import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/main.scss';
import { useRandomQuestions } from '../hooks';
import { data, Strings } from '../constant';
import { StyledButton, StyledCard } from '../components';
import logo from '../images/zeniark-logo.png';

const {
  LETS_START,
  SCORE_QUESTION,
  WELCOME_CHALLENGE,
  WELCOME_CHALLENGE_DESC,
} = Strings;

export const HomePage = () => {
  const { isError, randomData } = useRandomQuestions(data);

  console.log('isError: ', isError);
  console.log(randomData);
  return (
    <StyledCard>
      <div className='card-inner-container'>
        <div>
          <img src={logo} alt='Zeniark Logo' className='img-logo' />
        </div>
        <div className='challenge-container'>
          <h1>{WELCOME_CHALLENGE}</h1>
          <p>{WELCOME_CHALLENGE_DESC}</p>
        </div>
        <p className='score-question'>{SCORE_QUESTION}</p>
        <div>
          <StyledButton to={'quiz'} text={LETS_START} />
        </div>
      </div>
    </StyledCard>
  );
};
