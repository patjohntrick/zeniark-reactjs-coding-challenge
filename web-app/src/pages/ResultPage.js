import React from 'react';
import { useContext } from 'react';
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
  //   const ss = finalTenQuestions.shift();

  const handleReset = () => {
    setScore(0);
    setFinalTenQuestions([]);
    setUserAnswers();
  };

  console.log(finalTenQuestions);
  return (
    <StyledCard>
      <div>
        <StyledHeaderCard resultHeaderText={'Final Result'} />
        <div>
          <h3>{`${score}/10`}</h3>
        </div>
        <ol>
          {finalTenQuestions.map((data, index) => {
            return (
              <React.Fragment key={index + 1}>
                {index > 0 && (
                  <>
                    {' '}
                    <li>{data.question}</li>
                    <p>
                      The correct answer is <span>{data.correct_answer}</span>.
                      You answered <span>{userAnswers[index - 1]}</span>{' '}
                    </p>
                  </>
                )}
              </React.Fragment>
            );
          })}
        </ol>
        <StyledButton text={'PLAY AGAIN'} to={'/'} onClick={handleReset} />
      </div>
    </StyledCard>
  );
};
