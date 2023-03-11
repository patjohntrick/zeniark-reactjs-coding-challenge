import React from 'react';
import { useContext } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';

import '../styles/resultPage.scss';
import { StyledButton, StyledCard, StyledHeaderCard } from '../components';
import { AppContext } from '../App';

export const ResultPage = () => {
  const {
    score,
    setScore,
    finalTenQuestions,
    setFinalTenQuestions,
    userAnswers,
    setUserAnswers,
  } = useContext(AppContext);

  const handleReset = () => {
    setScore(0);
    setFinalTenQuestions([]);
    setUserAnswers([]);
  };

  return (
    <StyledCard>
      <div className='result-inner-card'>
        <StyledHeaderCard resultHeaderText={'Final Result'} />
        <div className='score-container'>
          <h3>{`${score}/10`}</h3>
          <p>Your Score</p>
        </div>
        <ol>
          {finalTenQuestions.map((data, index) => {
            return (
              <React.Fragment key={index + 1}>
                {index > 0 && (
                  <div className='question-checked'>
                    <div>
                      {' '}
                      <li>{data.question}</li>
                      <p>
                        The correct answer is{' '}
                        <span
                          className='correct-answer'
                          style={{
                            color:
                              data.correct_answer === 'True'
                                ? '#4fbd1b'
                                : '#e04e10',
                          }}
                        >
                          {data.correct_answer}
                        </span>
                        . You answered{' '}
                        <span
                          style={{
                            color:
                              userAnswers[index - 1] === 'True'
                                ? '#4fbd1b'
                                : '#e04e10',
                          }}
                        >
                          {userAnswers[index - 1]}
                        </span>{' '}
                      </p>
                    </div>
                    <div className='result-icon'>
                      {data.correct_answer === userAnswers[index - 1] ? (
                        <AiOutlineCheck className='result-icon check-icon' />
                      ) : (
                        <FaTimes className='result-icon cross-icon' />
                      )}
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </ol>
        <div className='result-btn-container'>
          <StyledButton text={'PLAY AGAIN'} to={'/'} onClick={handleReset} />
        </div>
      </div>
    </StyledCard>
  );
};
