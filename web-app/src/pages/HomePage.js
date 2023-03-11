import React, { useContext, useEffect } from 'react';

import '../styles/main.scss';
import { Strings, data } from '../constant';
import { StyledButton, StyledCard } from '../components';
import logo from '../images/zeniark-logo.png';
import { AppContext } from '../App';
import { useRandomQuestions } from '../hooks';

const {
  LETS_START,
  SCORE_QUESTION,
  WELCOME_CHALLENGE,
  WELCOME_CHALLENGE_DESC,
} = Strings;

export const HomePage = () => {
  const { setQuestions } = useContext(AppContext);
  const { randomData } = useRandomQuestions(data);

  const randomQestions = () => {
    for (let i = 0; i < data.length; i++) {
      let randomNumber = Math.floor(Math.random() * data.length);
      setQuestions((prevState) => [...prevState, randomNumber]);
    }
  };
  useEffect(() => {
    setQuestions(randomData);
    randomQestions();
  }, []);

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
